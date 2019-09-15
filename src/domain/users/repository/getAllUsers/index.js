const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getAllUsers = () => () => {
  const isLocalStrategy = true;
  const users = isLocalStrategy ? localStorageStrategy() : dbStrategy();

  return users;
};

module.exports = getAllUsers;
