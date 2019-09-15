const { localDatabase } = require('@UserMocks/data/');

function deleteFavoriteUser(id) {
  try {
    if (localDatabase.favoriteUsers.find((favoriteUser) => favoriteUser.id === id)) {
      localDatabase.favoriteUsers = localDatabase
        .favoriteUsers
        .filter((favoriteUser) => favoriteUser.id !== id);
      return true;
    }
    throw new Error('Favorite user with id does not exist');
  } catch (error) {
    return false;
  }
}

module.exports = deleteFavoriteUser;
