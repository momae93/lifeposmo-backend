const buildQueryResolvers = require('@PostApp/graphql/resolvers/buildQueryResolvers');
const buildMockPostServices = require('@PostMocks/services/');

describe('[MODULES][POSTS][APP][GRAPHQL - RESOLVERS] : buildQueryResolvers', () => {
  it('should build query resolvers', async () => {
    // LOCAL MOCKS
    const mockPostServices = buildMockPostServices();

    // FUNCTION TESTED
    const postQueryResolvers = buildQueryResolvers(mockPostServices);

    // EXPECTED
    const expectedPostQueryResolvers = {
      post: expect.any(Function),
      posts: expect.any(Function),
      postsWrittenBy: expect.any(Function),
    };
    expect(postQueryResolvers).toMatchObject(expectedPostQueryResolvers);
  });
});
