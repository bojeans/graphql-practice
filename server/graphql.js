const { ApolloServer } = require("apollo-server");
const PORT = 5000;

// types query / mutation /subscription
const typeDefs = `type Query {
    totalPosts: Int!
}`;
// resolvers
const resolvers = {
  Query: {
    totalPosts: () => {
      return 42;
    },
  },
};

// graphql server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
