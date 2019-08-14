const defaultBuildUserRepository = require('../../repository');

/**
 * DOMAIN level - Delete user by id
 * @param {*} userService
 */
const deleteUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();

  return repository.deleteUser(id);
};

module.exports = deleteUser;
