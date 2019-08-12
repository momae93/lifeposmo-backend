const defaultBuildUserRepository = require('../../repository');

/**
 * DOMAIN level - Get all users from repository
 * @param {*} userService
 */
const getAllUsers = (
  buildUserRepository = defaultBuildUserRepository,
) => () => {
  const repository = buildUserRepository();
  const users = repository.getAllUsers();

  return users;
};

module.exports = getAllUsers;
