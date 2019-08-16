const combineResolvers = require('../../../../src/lib/graphqlServices/resolvers/combineResolvers');

describe('[LIB][GRAPHQL][RESOLVERS] : combineResolvers', () => {
  it('should match snapshot lib graphql combineResolvers', async () => {
    const mockUserService = {};
    const mockPostService = {};
    const mockServices = {
      mockUserService,
      mockPostService,
    };
    const resolvers = combineResolvers(mockServices);

    expect(resolvers).toMatchSnapshot();
  });
});
