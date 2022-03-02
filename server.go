package main

import (
	"bytes"
	"context"
	"fmt"
	"github.com/graph-gophers/graphql-go"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"alis.px.resources.interface.v1/internal/resolvers"
	"github.com/graph-gophers/graphql-go/relay"
)

// client is a global client, initialized once per cloud run instance.
var (
	ctx context.Context
	err error

	// The compiled GraphQL schema read in from
	// the .graphql files through loadSchema().
	schema *graphql.Schema

	// gqlHandler provides a handler for all
	// requests to /graphql
	gqlHandler http.Handler
	// clientHandler provides a catch all handler
	// for any requests other than /graphql. This
	// allows for the routing to take place on the
	// client side.
	clientHandler http.Handler
)

func init() {

	// Disable log prefixes such as the default timestamp.
	// Prefix text prevents the message from being parsed as JSON.
	// A timestamp is added when shipping logs to Cloud Logging.
	log.SetFlags(0)

	// In development, ensure that both GOOGLE_APPLICATION_CREDENTIALS
	// and ALIS_OS_PROJECT are set before build.

	ctx = context.Background()
	resolvers.EstablishConnection(ctx)
}

func main() {
	schemaText, err := LoadSchema()
	if err != nil {
		log.Fatal(err.Error())
	}

	resolver, err := resolvers.NewRootResolver(ctx)
	if err != nil {
		log.Fatal(err.Error())
	}

	opts := []graphql.SchemaOpt{graphql.UseFieldResolvers(), graphql.MaxParallelism(100000)}
	schema = graphql.MustParseSchema(schemaText, resolver, opts...)

	log.Println(&Entry{Message: "alis.px.resources.interface.v1: starting server...", Severity: LogSeverity_NOTICE})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Println(&Entry{Message: "Defaulting to port " + port, Severity: LogSeverity_WARNING})
	}

	if os.Getenv("ALIS_OS_ENV") == "development" {
		gqlHandler = CorsMiddleware(&relay.Handler{Schema: schema})
	} else {
		gqlHandler = &relay.Handler{Schema: schema}
		// client frontend files.
		clientHandler = http.FileServer(http.Dir("dist"))
	}

	err = http.ListenAndServe(fmt.Sprintf(":%s", port), http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path, err := filepath.Abs(r.URL.Path)
		if err != nil {
			http.Error(w, "URL path error: "+err.Error(), http.StatusBadRequest)
			log.Println(&Entry{Message: "URL path error: " + err.Error(), Severity: LogSeverity_ERROR})
			return
		}

		if path == "/graphql" {
			gqlHandler.ServeHTTP(w, r)
			return
		} else {
			if os.Getenv("ALIS_OS_ENV") != "development" {

				// Handle all requests, excluding those requesting
				// static files (eg. images or css), to point to the
				// index.html file in dist.
				//
				// This is required to enable Vue Router History Mode
				// Ref: https://router.vuejs.org/guide/essentials/history-mode.html
				if !strings.Contains(r.RequestURI, ".") {
					r.URL.Path = "/"
				}
				clientHandler.ServeHTTP(w, r)
				return
			} else {
				http.Error(w, fmt.Sprintf("Error %d", http.StatusNotFound), http.StatusNotFound)
				log.Println(&Entry{Message: fmt.Sprintf("Error %d", http.StatusNotFound), Severity: LogSeverity_ERROR})
				return
			}
		}
	}))
	if err != nil {
		log.Println(&Entry{Message: fmt.Sprintf("Error %s", err.Error()), Severity: LogSeverity_ERROR})
	}
}

func LoadSchema() (string, error) {
	files, err := ioutil.ReadDir("schema")
	if err != nil {
		log.Fatal(err.Error())
		return err.Error(), nil
	}

	schema := new(bytes.Buffer)
	for _, fi := range files {
		file, err := os.Open(fmt.Sprintf("schema/%s", fi.Name()))
		if err != nil {
			return "", err
		}

		if _, err := schema.ReadFrom(file); err != nil {
			_ = file.Close()
			return "", err
		}

		_ = file.Close()
	}

	return schema.String(), nil
}

func CorsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST,OPTIONS")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}
