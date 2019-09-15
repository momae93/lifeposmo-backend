const buildMockUsers = require('@UserMocks/data/users/buildMockUsers');
const buildMockFavoriteUsers = require('@UserMocks/data/favoriteUsers/buildMockFavoriteUsers');
const buildMockPosts = require('@PostMocks/data/posts/buildMockPosts');

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
