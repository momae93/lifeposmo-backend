const buildQueryResolvers = require('./buildQueryResolvers');
const buildMutationResolvers = require('./buildMutationResolvers');
const buildPostResolvers = require('./buildPostResolvers');

const buildResolvers = (postServices, userServices) => ({
  Query: buildQueryResolvers(postServices),
  Mutation: buildMutationResolvers(postServices),
  Post: buildPostResolvers(postServices, userServices),
});

module.exports = buildResolvers;
