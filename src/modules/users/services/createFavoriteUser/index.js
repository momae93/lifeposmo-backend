const defaultBuildUserRepository = require('../../repository');

function appToDomainEntity(favoriteUserAppEntity) {
  const {
    idUser,
    idFavoriteUser,
  } = favoriteUserAppEntity;

  const userDomainEntity = {
    idUser,
    idFavoriteUser,
  };

  return userDomainEntity;
}

/**
 * DOMAIN level - Create favorite user
 * @param {*} userServices
 */
const createFavoriteUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (favoriteUserAppEntity) => {
  const repository = buildUserRepository();
  const favoriteUserDomainEntity = appToDomainEntity(favoriteUserAppEntity);

  return repository.createFavoriteUser(favoriteUserDomainEntity);
};

module.exports = createFavoriteUser;
