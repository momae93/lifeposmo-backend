const { localDatabase } = require('@UserMocks/data/');

function generateIdFromList() {
  const favoriteUserIdList = localDatabase
    .favoriteUsers
    .map((user) => user.id);

  const newId = favoriteUserIdList.length === 0 ? 1 : Math.max(...favoriteUserIdList) + 1;

  return newId;
}

function domainToDataEntity(favoriteUserDomainEntity) {
  const {
    idUser,
    idFavoriteUser,
  } = favoriteUserDomainEntity;

  const newIdFavoriteUser = generateIdFromList();
  const userDataEntity = {
    id: newIdFavoriteUser,
    idUser,
    idFavoriteUser,
  };

  return userDataEntity;
}

function createFavoriteUser(favoriteUserDomainEntity) {
  const favoriteUserDataEntity = domainToDataEntity(favoriteUserDomainEntity);
  localDatabase
    .favoriteUsers
    .push(favoriteUserDataEntity);

  return favoriteUserDataEntity;
}

module.exports = createFavoriteUser;
