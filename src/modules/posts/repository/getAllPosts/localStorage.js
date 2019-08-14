const { localDatabase } = require('../../__mocks__/data/');

function getAllPosts() {
  return localDatabase.posts;
}

module.exports = getAllPosts;
