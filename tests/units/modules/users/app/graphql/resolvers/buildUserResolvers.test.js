const buildMockUserServices = require('@UserMocks/services');
const buildUserResolvers = require('@UserApp/graphql/resolvers/buildUserResolvers');
const buildMockPostServices = require('@PostMocks/services/');

describe('[MODULES][USERS][APP][GRAPHQL - RESOLVERS] : buildUserResolvers', () => {
  it('should build user resolvers', async () => {
    // LOCAL MOCKS
    const mockUserServices = buildMockUserServices();
    const mockPostServices = buildMockPostServices();

    // FUNCTION TESTED
    const userResolvers = buildUserResolvers(mockUserServices, mockPostServices);

    // EXPECTED
    const expectedUserResolvers = {
      postsWritten: expect.any(Function),
    };

    expect(userResolvers).toMatchObject(expectedUserResolvers);
  });
});
