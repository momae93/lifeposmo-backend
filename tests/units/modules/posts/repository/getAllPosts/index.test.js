const getAllPosts = require('../../../../../../src/modules/posts/repository/getAllPosts');
const mockPosts = require('../../../../../../src/modules/posts/__mocks__/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY] : get all posts', () => {
  it('should get all posts', async () => {
    // FUNCTION TESTED
    const posts = getAllPosts()();

    // EXPECTED
    const expectedPosts = mockPosts;

    expect(posts).toMatchObject(expectedPosts);
  });
});
