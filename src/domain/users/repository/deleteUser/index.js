const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const deleteUser = () => (id) => {
  const isLocalStrategy = true;
  const isDeleted = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return isDeleted;
};

module.exports = deleteUser;
