// imports
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const PORT = 5000;
const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

// usage
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, "./schema")));
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers"))
);

// graphql server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Middleware
const app = express();
// apollo Middleware

apolloServer.start().then((res) => {
  apolloServer.applyMiddleware({ app });
});

// server
const httpserver = http.createServer(app);

// rest endpoint
app.get("/rest", (req, res) => {
  res.json({
    data: "yay it is working",
  });
});

// port
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
  console.log(
    `graphql server is running woohoo, on ${PORT}${apolloServer.graphqlPath}`
  );
});
