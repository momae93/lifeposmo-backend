const buildMockUsers = require('../../src/modules/users/__mocks__/data/users/buildMockUsers');
const buildMockFavoriteUsers = require('../../src/modules/users/__mocks__/data/favoriteUsers/buildMockFavoriteUsers');
const buildMockPosts = require('../../src/modules/posts/__mocks__/data/posts/buildMockPosts');

function generateMockDatabase() {
  const mockUsers = buildMockUsers();
  const mockPosts = buildMockPosts();
  const mockFavoriteUsers = buildMockFavoriteUsers();

  const mockDatabase = {
    users: mockUsers,
    posts: mockPosts,
    favoriteUsers: mockFavoriteUsers,
  };

  return mockDatabase;
}

module.exports = generateMockDatabase;
