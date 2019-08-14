const { localDatabase } = require('../../__mocks__/data/');

function deleteUser(id) {
  try {
    localDatabase.posts = localDatabase
      .posts
      .filter((post) => post.id !== id);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = deleteUser;
