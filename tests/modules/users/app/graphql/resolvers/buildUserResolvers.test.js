const buildUserResolvers = require('../../../../../../src/modules/users/app/graphql/resolvers/buildUserResolvers');
const buildMockPostServices = require('../../../../../../src/modules/posts/__mocks__/services/');
const buildMockUserServices = require('../../../../../../src/modules/users/__mocks__/services/');

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
