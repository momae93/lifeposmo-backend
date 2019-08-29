const getUserByIdLocalStorage = require('../../../../../../src/modules/posts/repository/getPostById/localStorage');
const mockPosts = require('../../../../../../src/modules/posts/__mocks__/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY][LOCAL STORAGE] : get post by id', () => {
  it('should get all posts from local storage', async () => {
    // LOCAL MOCKS
    const idPost = 1;

    // FUNCTION TESTED
    const foundPost = getUserByIdLocalStorage(idPost);

    // EXPECTED
    const expectedPost = mockPosts.find((post) => post.id === idPost);

    expect(foundPost).toMatchObject(expectedPost);
  });
});
