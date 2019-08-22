const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getFollowersByIdUser = () => (id) => {
  const isLocalStrategy = true;
  const followers = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return followers;
};

module.exports = getFollowersByIdUser;
