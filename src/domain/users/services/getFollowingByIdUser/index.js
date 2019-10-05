const defaultBuildUserRepository = require('@UserRepository');

/**
 * DOMAIN level - Get followings by id user
 * @param {*} userServices
 */
const getFollowingByIdUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();
  const followingList = repository.getFollowingByIdUser(id);

  return followingList;
};

module.exports = getFollowingByIdUser;
