const buildQueryResolvers = require('./buildQueryResolvers');
const buildMutationResolvers = require('./buildMutationResolvers');
const buildUserResolvers = require('./buildUserResolvers');

const buildResolvers = (userService, postService) => ({
  Query: buildQueryResolvers(userService),
  Mutation: buildMutationResolvers(userService),
  User: buildUserResolvers(userService, postService),
});

module.exports = buildResolvers;
