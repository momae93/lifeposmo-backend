const defaultBuildUserRepository = require('../../repository');

/**
 * DOMAIN level - Delete favorite user by id
 * @param {*} userServices
 */
const deleteFavoriteUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();

  return repository.deleteFavoriteUser(id);
};

module.exports = deleteFavoriteUser;
