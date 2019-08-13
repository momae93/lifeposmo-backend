const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getUserById = () => (id) => {
  const isLocalStrategy = true;
  const user = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return user;
};

module.exports = getUserById;
