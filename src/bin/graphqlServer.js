const { ApolloServer } = require('apollo-server');
const dbServices = require('../lib/dbServices');
const { combineResolvers, combineSchemas } = require('../lib/graphqlServices/');
const {
  buildRepository: builUserRepository,
  buildServices: buildUserServices,
} = require('../modules/users');
const {
  buildRepository: buildPostRepository,
  buildServices: buildPostServices,
} = require('../modules/posts');
/**
 * Build services by dependency injection
 */
const userService = buildUserServices(dbServices, builUserRepository);
const postService = buildPostServices(dbServices, buildPostRepository);
const services = {
  userService,
  postService,
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
