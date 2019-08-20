const buildMockUsers = require('../../src/modules/users/__mocks__/data/users/buildMockUsers');
const buildMockPosts = require('../../src/modules/posts/__mocks__/data/posts/buildMockPosts');

function generateMockDatabase() {
  const mockUsers = buildMockUsers();
  const mockPosts = buildMockPosts();

  const mockDatabase = {
    users: mockUsers,
    posts: mockPosts,
  };

  return mockDatabase;
}

module.exports = generateMockDatabase;
