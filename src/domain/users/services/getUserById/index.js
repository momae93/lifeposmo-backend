const defaultBuildUserRepository = require('@UserRepository');

/**
 * DOMAIN level - Get single user by id
 * @param {*} userServices
 */
const getUserById = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();
  const user = repository.getUserById(id);

  return user;
};

module.exports = getUserById;
