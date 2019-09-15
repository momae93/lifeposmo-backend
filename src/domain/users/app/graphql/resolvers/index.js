const buildQueryResolvers = require('./buildQueryResolvers');
const buildMutationResolvers = require('./buildMutationResolvers');
const buildUserResolvers = require('./buildUserResolvers');

const buildResolvers = (userServices, postServices) => ({
  Query: buildQueryResolvers(userServices),
  Mutation: buildMutationResolvers(userServices),
  User: buildUserResolvers(userServices, postServices),
});

module.exports = buildResolvers;
