const buildMockUserServices = require('@UserMocks/services');
const buildMockPostServices = require('@PostMocks/services');
const buildPostResolvers = require('@PostApp/graphql/resolvers/buildPostResolvers');

describe('[MODULES][POSTS][APP][GRAPHQL - RESOLVERS] : buildUserResolvers', () => {
  it('should build post resolvers', async () => {
    // LOCAL MOCKS
    const mockUserServices = buildMockUserServices();
    const mockPostServices = buildMockPostServices();

    // FUNCTION TESTED
    const postResolvers = buildPostResolvers(mockPostServices, mockUserServices);

    // EXPECTED
    const expectedUserResolvers = {
      author: expect.any(Function),
    };

    expect(postResolvers).toMatchObject(expectedUserResolvers);
  });
});
