const buildQueryResolvers = require('./buildQueryResolvers');
const buildMutationResolvers = require('./buildMutationResolvers');
const buildPostResolvers = require('./buildPostResolvers');

const buildResolvers = (postService, userService) => ({
  Query: buildQueryResolvers(postService),
  Mutation: buildMutationResolvers(postService),
  Post: buildPostResolvers(postService, userService),
});

module.exports = buildResolvers;
