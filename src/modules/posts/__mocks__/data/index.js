const posts = require('./posts/posts');
const buildMockPosts = require('./posts/buildMockPosts');
const localDatabase = require('./localDatabase');

module.exports = {
  buildMockPosts,
  posts,
  localDatabase,
};
