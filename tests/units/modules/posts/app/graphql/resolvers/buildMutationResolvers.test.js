const buildMutationResolvers = require('../../../../../../../src/modules/posts/app/graphql/resolvers/buildMutationResolvers');
const buildMockPostServices = require('../../../../../../../src/modules/posts/__mocks__/services/');

describe('[MODULES][POSTS][APP][GRAPHQL - RESOLVERS] : buildMutationResolvers', () => {
  it('should build mutation resolvers', async () => {
    // LOCAL MOCKS
    const mockPostServices = buildMockPostServices();

    // FUNCTION TESTED
    const postResolvers = buildMutationResolvers(mockPostServices);

    // EXPECTED
    const expectedMutationResolvers = {
      createPost: expect.any(Function),
      deletePost: expect.any(Function),
    };
    expect(postResolvers).toMatchObject(expectedMutationResolvers);
  });
});
