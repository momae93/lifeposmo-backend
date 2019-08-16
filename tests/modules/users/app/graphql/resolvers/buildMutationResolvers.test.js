const buildMutationResolvers = require('../../../../../../src/modules/users/app/graphql/resolvers/buildMutationResolvers');
const buildMockUserServices = require('../../../../../../src/modules/users/__mocks__/services/');

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
