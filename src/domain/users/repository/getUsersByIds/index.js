const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getUsersByIds = () => (id) => {
  const isLocalStrategy = true;
  const users = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return users;
};

module.exports = getUsersByIds;
