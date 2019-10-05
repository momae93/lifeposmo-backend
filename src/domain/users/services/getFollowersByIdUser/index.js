const defaultBuildUserRepository = require('@UserRepository');

/**
 * DOMAIN level - Get followers by id user
 * @param {*} userServices
 */
const getFollowersByIdUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();
  const followerList = repository.getFollowersByIdUser(id);

  return followerList;
};

module.exports = getFollowersByIdUser;
