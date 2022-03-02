# alis-os-exchange

## Setup environment

### Install backend dependencies

Run the command in the `{org}/{product}/exchange/v1` directory.
```
go mod tidy
```

### Install frontend dependencies

Run the command in the `{org}/{product}/exchange/v1/client` directory.
```
npm install
```

### Get service account key

In the terminal, run the command:

```
alis product getkey alis.os
```

### Add configurations

Set `Run -> Kind: Package`

Set `Package Path: alis.os.resources.exchange.v1`

Set working directory to the v1 folder following pattern:
1
```
/Users/{user}/alis.exchange/alis/products/os/resources/interface/v1
```

Set environment:
```
ALIS_OS_ENV=development;GOOGLE_APPLICATION_CREDENTIALS=../../../key-alis-os-dev-95wnw3c.json;ALIS_OS_PROJECT=alis-os-dev-95wnw3c
```

## Run

### Run the server

From `server.go`, run  `go build alis.os...`

### Run the client

Run the command in the `{org}/{product}/exchange/v1/client` directory.

```
npm run server
```

## Usage

Open `http://localhost:3000/` in the brower to use.

## Client Package Description
### Webpack-bundle-analyze: 
Visualize size of webpack output files with an interactive zoomable treemap.
(Take a look @ bundlephobia)

### Lodash
Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

### Graphql
The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.

### Apollo-client
Apollo Client is a fully-featured caching GraphQL client with integrations for React, Angular, and more. It allows you to easily build UI components that fetch data via GraphQL.

### Apollo-cache-inmemory
apollo-cache-inmemory is the recommended cache implementation for Apollo Client 2.0. InMemoryCache is a normalized data store that supports all of Apollo Client 1.0's features without the dependency on Redux.

### Apollo-link-http
The http link is a terminating link that fetches GraphQL results from a GraphQL endpoint over an http connection. 
 
### Query-string
Parse and stringify URL query strings. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form

### vue-apollo
Allows you to integrate graphql with vue.js application

### vue-fragment
Fragment component for vue.js

### vue-router
Vue Router is the official router for Vue.js

### eslint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code

### eslint-plugin-graphql
An ESLint plugin that checks tagged query strings inside JavaScript, or queries inside .graphql files, against a GraphQL schema.

### eslint-plugin-prettier
Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

### eslint-plugin-vue
This plugin allows us to check the <template> and <script> of .vue files with ESLint, as well as Vue code in .js files.

### graphql-tag
A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.

### vuetify loader
The vuetify-loader alleviates this pain by automatically importing all the Vuetify components you use, where you use them. This will also make code-splitting more effective, as webpack will only load the components required for that chunk to be displayed.

### sass-loader
Loads a SASS/SCSS file and compiles it to CSS.

### node-sass
Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
