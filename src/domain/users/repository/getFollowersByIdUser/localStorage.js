const { localDatabase } = require('@UserMocks/data/');

function getFollowersByIdUser(id) {
  const followers = localDatabase
    .favoriteUsers
    .filter((favoriteUser) => favoriteUser.idFavoriteUser === id)
    .map((favoriteUser) => favoriteUser.idUser);

  return followers;
}

module.exports = getFollowersByIdUser;
