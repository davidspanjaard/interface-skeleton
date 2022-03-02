package resolvers

import (
	"context"
	"fmt"
	pbPtOperations "go.protobuf.alis.alis.exchange/alis/pt/resources/operations/v1"
	ptAnalyticsExchangePb "go.protobuf.alis.alis.exchange/alis/pt/services/analytics/v1"
	ptAnalyticsExchangePbV2 "go.protobuf.alis.alis.exchange/alis/pt/services/analytics/v2"
	"google.golang.org/grpc"
	"log"
	"os"

	alis "go.lib.alis.dev"
	pb "go.protobuf.alis.alis.exchange/alis/px/resources/portfolios/v1"
)

var (
	PortfoliosService   pb.ServiceClient
	ptAnalyticsClient   ptAnalyticsExchangePb.AnalyticsServiceClient
	ptAnalyticsClientV2 ptAnalyticsExchangePbV2.AnalyticsServiceClient
	ptOperations        pbPtOperations.OperationsClient
	err                 error
)

func EstablishConnection(ctx context.Context) {

	projectID := os.Getenv("ALIS_OS_PROJECT")
	if projectID == "" {
		log.Fatal("ALIS_OS_PROJECT env not set.")
	}

	cloudRunHash := os.Getenv("ALIS_OS_PROJECT_HASH")
	if cloudRunHash == "" {
		log.Fatal("ALIS_OS_PROJECT_HASH env not set.")
	}

	// Establish connections to services.
	prodConn, err := alis.NewConn(ctx, "resources-portfolios-v1-"+cloudRunHash+"-ew.a.run.app:443", false)
	if err != nil {
		log.Fatal(err.Error())
	}

	// Initialise an alis.exchange PT services client
	ptCloudRunHash := "howlqqs3mq"
	var conn *grpc.ClientConn
	conn, err = alis.NewConn(context.Background(), fmt.Sprintf("services-analytics-v1-%s-ew.a.run.app:443", ptCloudRunHash), false)
	if err != nil {
		log.Fatalf("alis.NewConn: %s", err)
	}
	ptAnalyticsClient = ptAnalyticsExchangePb.NewAnalyticsServiceClient(conn)

	conn, err = alis.NewConn(context.Background(), fmt.Sprintf("services-analytics-v2-%s-ew.a.run.app:443", ptCloudRunHash), false)
	if err != nil {
		log.Fatalf("alis.NewConn: %s", err)
	}
	ptAnalyticsClientV2 = ptAnalyticsExchangePbV2.NewAnalyticsServiceClient(conn)

	conn, err = alis.NewConn(context.Background(), fmt.Sprintf("resources-operations-v1-%s-ew.a.run.app:443", ptCloudRunHash), false)
	if err != nil {
		log.Fatalf("alis.NewConn: %s", err)
	}
	ptOperations = pbPtOperations.NewOperationsClient(conn)

	PortfoliosService = pb.NewServiceClient(prodConn)
}
