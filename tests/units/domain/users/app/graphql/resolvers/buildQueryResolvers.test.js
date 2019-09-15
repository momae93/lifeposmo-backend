const buildMockUserServices = require('@UserMocks/services');
const buildQueryResolvers = require('@UserApp/graphql/resolvers/buildQueryResolvers');

describe('[MODULES][USERS][APP][GRAPHQL - RESOLVERS] : buildQueryResolvers', () => {
  it('should build query resolvers', async () => {
    // LOCAL MOCKS
    const mockUserServices = buildMockUserServices();

    // FUNCTION TESTED
    const userQueryResolvers = buildQueryResolvers(mockUserServices);

    // EXPECTED
    const expectedUserQueryResolvers = {
      user: expect.any(Function),
      users: expect.any(Function),
    };
    expect(userQueryResolvers).toMatchObject(expectedUserQueryResolvers);
  });
});
