const { localDatabase } = require('@PostMocks/data/');

function getAllPosts() {
  return localDatabase.posts;
}

module.exports = getAllPosts;
