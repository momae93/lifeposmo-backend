const { localDatabase } = require('../../__mocks__/data/');

function getPostsByIdAuthor(idAuthor) {
  const postList = localDatabase
    .posts
    .filter((post) => post.idAuthor === idAuthor);

  return postList;
}

module.exports = getPostsByIdAuthor;
