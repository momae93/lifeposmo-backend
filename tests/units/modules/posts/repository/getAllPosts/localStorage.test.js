const getAllPostsLocalStorage = require('@PostRepository/getAllPosts/localStorage');
const mockPosts = require('@PostMocks/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY][LOCAL STORAGE] : get all posts', () => {
  it('should get all posts from local storage', async () => {
    // FUNCTION TESTED
    const posts = getAllPostsLocalStorage();

    // EXPECTED
    const expectedPosts = mockPosts;

    expect(posts).toMatchObject(expectedPosts);
  });
});
