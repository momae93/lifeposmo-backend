const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const deletePost = () => (id) => {
  const isLocalStrategy = true;
  const isDeleted = isLocalStrategy ? localStorageStrategy(id) : dbStrategy();

  return isDeleted;
};

module.exports = deletePost;
