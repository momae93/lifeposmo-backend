const { ApolloServer } = require('apollo-server');
const dbServices = require('../lib/dbServices');
const { combineResolvers, combineSchemas } = require('../lib/graphqlServices/');

/**
 * Repository
 */
const {
  buildRepository,
  buildServices: buildUserServices,
} = require('../modules/users');

/**
 * Build services by dependency injection
 */
const userService = buildUserServices(dbServices, buildRepository);
const services = {
  userService,
};

const resolvers = combineResolvers(services);
const schemas = combineSchemas();

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
});

module.exports = server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url} 🚀`);
});
