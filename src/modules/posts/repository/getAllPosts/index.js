const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getAllPosts = () => () => {
  const isLocalStrategy = true;
  const posts = isLocalStrategy ? localStorageStrategy() : dbStrategy();

  return posts;
};

module.exports = getAllPosts;
