const buildMockUsers = require('./users/buildMockUsers');
const buildMockFavoriteUsers = require('./favoriteUsers/buildMockFavoriteUsers');
const localDatabase = require('./localDatabase');

module.exports = {
  buildMockUsers,
  buildMockFavoriteUsers,
  localDatabase,
};
