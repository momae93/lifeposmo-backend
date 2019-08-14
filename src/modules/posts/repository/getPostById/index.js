const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getUserById = () => (id) => {
  const isLocalStrategy = true;
  const post = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return post;
};

module.exports = getUserById;
