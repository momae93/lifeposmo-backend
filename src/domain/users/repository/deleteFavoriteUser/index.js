const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const deleteFavoriteUser = () => (id) => {
  const isLocalStrategy = true;
  const isFavoriteDeleted = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return isFavoriteDeleted;
};

module.exports = deleteFavoriteUser;
