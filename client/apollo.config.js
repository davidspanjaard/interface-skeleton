import { ALIS_API_URL } from "./src/env";

module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: `${ALIS_API_URL}/graphql`,
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
