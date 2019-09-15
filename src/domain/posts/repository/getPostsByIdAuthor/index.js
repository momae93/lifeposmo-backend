const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const getPostsByIdAuthor = () => (idAuthor) => {
  const isLocalStrategy = true;
  const postList = isLocalStrategy ? localStorageStrategy(idAuthor) : dbStrategy();

  return postList;
};

module.exports = getPostsByIdAuthor;
