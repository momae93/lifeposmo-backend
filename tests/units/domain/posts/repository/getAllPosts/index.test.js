const getAllPosts = require('@PostRepository/getAllPosts');
const mockPosts = require('@PostMocks/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY] : get all posts', () => {
  it('should get all posts', async () => {
    // FUNCTION TESTED
    const posts = getAllPosts()();

    // EXPECTED
    const expectedPosts = mockPosts;

    expect(posts).toMatchObject(expectedPosts);
  });
});
