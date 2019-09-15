const customScalarResolvers = require('./customScalarResolvers');
const { buildResolvers: buildUserResolvers } = require('@UserModule');
const { buildResolvers: buildPostResolvers } = require('@PostModule');

/**
 * Combines all modules' resolvers
 */

function combineResolvers(services) {
  const {
    userServices,
    postServices,
  } = services;
  const resolvers = [
    buildUserResolvers(userServices, postServices),
    buildPostResolvers(postServices, userServices),
    customScalarResolvers,
  ];

  return resolvers;
}

module.exports = combineResolvers;
