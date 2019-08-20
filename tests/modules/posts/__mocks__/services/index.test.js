const buildMockServices = require('../../../../../src/modules/posts/__mocks__/services');

describe('[MODULES][POSTS][__MOCKS__][REPOSITORY] : mockRepository', () => {
  it('should returns an object containing mocked repository', async () => {
    // FUNCTION TESTED
    const mockServices = buildMockServices();

    // EXPECTED
    const expectedMockServices = {
      createPost: expect.any(Function),
      deletePost: expect.any(Function),
      getAllPosts: expect.any(Function),
      getPostById: expect.any(Function),
      getPostsByIdAuthor: expect.any(Function),
    };

    expect(mockServices).toMatchObject(expectedMockServices);
  });
});
