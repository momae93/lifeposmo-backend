const buildPostRepository = require('@PostRepository/');

describe('[MODULES][POSTS][REPOSITORY] : post repository', () => {
  it('should build post repository with no db client passed', async () => {
    // LOCAL MOCKS
    const mockDbClient = null;

    // FUNCTION TESTED
    const postRepository = buildPostRepository(mockDbClient);

    // EXPECTED
    const expectedRepository = {
      createPost: expect.any(Function),
      deletePost: expect.any(Function),
      getAllPosts: expect.any(Function),
      getPostById: expect.any(Function),
      getPostsByIdAuthor: expect.any(Function),
    };

    expect(postRepository).toMatchObject(expectedRepository);
  });
});
