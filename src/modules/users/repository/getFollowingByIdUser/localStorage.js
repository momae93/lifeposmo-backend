const { localDatabase } = require('../../__mocks__/data/');

function getFollowingByIdUser(id) {
  const followings = localDatabase
    .favoriteUsers
    .filter((favoriteUser) => favoriteUser.idUser === id)
    .map((favoriteUser) => favoriteUser.idFavoriteUser);

  return followings;
}

module.exports = getFollowingByIdUser;
