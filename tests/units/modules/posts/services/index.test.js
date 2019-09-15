const buildPostServices = require('@PostService/');

describe('[MODULES][POSTS][SERVICES] : post services', () => {
  it('should build post services', async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockBuildPostRepository = () => ({
      createPost: () => {},
      deletePost: () => {},
      getAllPosts: () => {},
      getPostById: () => {},
      getPostsByIdAuthor: () => {},
    });

    // FUNCTION TESTED
    const postServices = buildPostServices(mockDbServices, mockBuildPostRepository);

    // EXPECTED
    const expecteduserServices = {
      createPost: expect.any(Function),
      deletePost: expect.any(Function),
      getAllPosts: expect.any(Function),
      getPostById: expect.any(Function),
      getPostsByIdAuthor: expect.any(Function),
    };

    expect(postServices).toMatchObject(expecteduserServices);
  });
});
