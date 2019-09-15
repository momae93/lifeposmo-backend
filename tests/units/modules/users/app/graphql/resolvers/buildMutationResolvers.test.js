const buildMockUserServices = require('@UserMocks/services');
const buildMutationResolvers = require('@UserApp/graphql/resolvers/buildMutationResolvers');

describe('[MODULES][USERS][APP][GRAPHQL - RESOLVERS] : buildMutationResolvers', () => {
  it('should build mutation resolvers', async () => {
    // LOCAL MOCKS
    const mockUserServices = buildMockUserServices();

    // FUNCTION TESTED
    const userResolvers = buildMutationResolvers(mockUserServices);

    // EXPECTED
    const expectedMutationResolvers = {
      createUser: expect.any(Function),
      deleteUser: expect.any(Function),
    };
    expect(userResolvers).toMatchObject(expectedMutationResolvers);
  });
});
