const buildRepository = require('./repository');
const buildServices = require('./services');
const buildResolvers = require('./app/graphql/resolvers');
const schemas = require('./app/graphql/schemas');

module.exports = {
  buildRepository,
  buildServices,
  buildResolvers,
  schemas,
};
