const getAllPostsLocalStorage = require('../../../../../src/modules/posts/repository/getAllPosts/localStorage');
const mockPosts = require('../../../../../src/modules/posts/__mocks__/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY][LOCAL STORAGE] : get all posts', () => {
  it('should get all posts from local storage', async () => {
    // FUNCTION TESTED
    const posts = getAllPostsLocalStorage();

    // EXPECTED
    const expectedPosts = mockPosts;

    expect(posts).toMatchObject(expectedPosts);
  });
});
