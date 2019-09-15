const defaultBuildUserRepository = require('@UserRepository');

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
 * DOMAIN level - Follow an user
 * @param {*} userServices
 */
const followUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (favoriteUserAppEntity) => {
  const repository = buildUserRepository();
  const favoriteUserDomainEntity = appToDomainEntity(favoriteUserAppEntity);

  return repository.createFavoriteUser(favoriteUserDomainEntity);
};

module.exports = followUser;
