const buildPostResolvers = require('../../../../../../src/modules/posts/app/graphql/resolvers/buildPostResolvers');
const buildMockPostServices = require('../../../../../../src/modules/posts/__mocks__/services');
const buildMockUserServices = require('../../../../../../src/modules/users/__mocks__/services');

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
