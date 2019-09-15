const defaultBuildUserRepository = require('@UserRepository');

/**
 * DOMAIN level - Delete user by id
 * @param {*} userServices
 */
const deleteUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();

  return repository.deleteUser(id);
};

module.exports = deleteUser;
