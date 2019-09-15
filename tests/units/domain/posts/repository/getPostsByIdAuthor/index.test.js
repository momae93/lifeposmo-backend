const getPostsByIdAuthor = require('@PostRepository/getPostsByIdAuthor');
const mockPosts = require('@PostMocks/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY] : get posts written written by id author', () => {
  it('should get a list of post written given a user id', async () => {
    // LOCAL MOCKS
    const idAuthor = 1;

    // FUNCTION TESTED
    const postsWrittenBy = getPostsByIdAuthor()(idAuthor);

    // EXPECTED
    const expectedPostsWrittenBy = mockPosts.filter((post) => post.idAuthor === idAuthor);

    expect(postsWrittenBy).toMatchObject(expectedPostsWrittenBy);
  });
});
