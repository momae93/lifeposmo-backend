const buildQueryResolvers = require('./buildQueryResolvers');
const buildMutationResolvers = require('./buildMutationResolvers');

const buildResolvers = (userService) => ({
  Query: buildQueryResolvers(userService),
  Mutation: buildMutationResolvers(userService),
});

module.exports = buildResolvers;
