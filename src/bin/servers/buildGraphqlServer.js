const { ApolloServer } = require('apollo-server');
const { combineResolvers, combineSchemas } = require('@GraphqlService');

function buildGraphqlServer(appServices) {
  const resolvers = combineResolvers(appServices);
  const schemas = combineSchemas();

  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
  });

  server.start = () => {
    server
      .listen()
      .then(() => {
        console.log('Server running on port 4000');
      });
  };

  return server;
}

module.exports = buildGraphqlServer;
