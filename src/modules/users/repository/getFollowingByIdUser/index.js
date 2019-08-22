const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getFollowingByIdUser = () => (id) => {
  const isLocalStrategy = true;
  const followings = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return followings;
};

module.exports = getFollowingByIdUser;
