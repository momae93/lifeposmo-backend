const defaultBuildUserRepository = require('../../repository');

/**
 * DOMAIN level - Unfollow user
 * @param {*} userServices
 */
const unfollowUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();

  return repository.deleteFavoriteUser(id);
};

module.exports = unfollowUser;
