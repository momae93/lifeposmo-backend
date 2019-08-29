const getPostsByIdAuthorLocalStorage = require('../../../../../../src/modules/posts/repository/getPostsByIdAuthor/localStorage');
const mockPosts = require('../../../../../../src/modules/posts/__mocks__/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY][LOCAL STORAGE] : get posts written written by id author', () => {
  it('should get posts written written from local storage', async () => {
    // LOCAL MOCKS
    const idAuthor = 1;

    // FUNCTION TESTED
    const postsWrittenBy = getPostsByIdAuthorLocalStorage(idAuthor);

    // EXPECTED
    const expectedPostsWrittenBy = mockPosts.filter((post) => post.id === idAuthor);

    expect(postsWrittenBy).toMatchObject(expectedPostsWrittenBy);
  });
});
