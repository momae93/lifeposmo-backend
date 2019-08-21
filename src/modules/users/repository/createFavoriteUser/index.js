const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const createFavoriteUser = () => (favoriteUserDomainEntity) => {
  const isLocalStrategy = true;
  const favoriteUser = isLocalStrategy
    ? localStorageStrategy(favoriteUserDomainEntity)
    : dbStrategy();

  return favoriteUser;
};

module.exports = createFavoriteUser;
