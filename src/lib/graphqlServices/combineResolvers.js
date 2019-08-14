const { buildResolvers: buildUserResolvers } = require('../../modules/users/');
const { buildResolvers: buildPostResolvers } = require('../../modules/posts/');

/**
 * Combines all modules' resolvers
 */

function combineResolvers(services) {
  const {
    userService,
    postService,
  } = services;
  const resolvers = [
    buildUserResolvers(userService, postService),
    buildPostResolvers(postService, userService),
  ];

  return resolvers;
}

module.exports = combineResolvers;
