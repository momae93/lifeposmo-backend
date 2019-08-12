const { buildResolvers: buildUserResolvers } = require('../../modules/users/');

/**
 * Combines all modules' resolvers
 */

function combineResolvers(services) {
  const {
    userService,
  } = services;
  const resolvers = [
    buildUserResolvers(userService),
  ];

  return resolvers;
}

module.exports = combineResolvers;
