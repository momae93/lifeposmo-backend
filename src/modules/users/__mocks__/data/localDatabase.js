const buildMockUsers = require('./users/buildMockUsers');
const buildMockFavoriteUsers = require('./favoriteUsers/buildMockFavoriteUsers');

const users = buildMockUsers();
const favoriteUsers = buildMockFavoriteUsers();

const localDatabase = {
  users,
  favoriteUsers,
};

module.exports = localDatabase;
