const { localDatabase } = require('../../__mocks__/data/');

function deletePost(id) {
  try {
    if (localDatabase.posts.find((post) => post.id === id)) {
      localDatabase.posts = localDatabase
        .posts
        .filter((post) => post.id !== id);
      return true;
    }
    throw new Error('Post with id does not exist');
  } catch (error) {
    return false;
  }
}

module.exports = deletePost;
