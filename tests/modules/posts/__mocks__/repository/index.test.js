const buildMockRepository = require('../../../../../src/modules/posts/__mocks__/repository');

describe('[MODULES][POSTS][__MOCKS__][REPOSITORY] : mockRepository', () => {
  it('should returns an object containing mocked repository', async () => {
    // FUNCTION TESTED
    const mockRepository = buildMockRepository();

    // EXPECTED
    const expectedMockRepository = {
      createPost: expect.any(Function),
      deletePost: expect.any(Function),
      getAllPosts: expect.any(Function),
      getPostById: expect.any(Function),
      getPostsByIdAuthor: expect.any(Function),
    };

    expect(mockRepository).toMatchObject(expectedMockRepository);
  });
});
