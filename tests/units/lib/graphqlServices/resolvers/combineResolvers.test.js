const combineResolvers = require('../../../../../src/lib/graphqlServices/resolvers/combineResolvers');

describe('[LIB][GRAPHQL][RESOLVERS] : combineResolvers', () => {
  it('should match snapshot lib graphql combineResolvers', async () => {
    const mockUserServices = {};
    const mockpostServices = {};
    const mockServices = {
      mockUserServices,
      mockpostServices,
    };
    const resolvers = combineResolvers(mockServices);

    expect(resolvers).toMatchSnapshot();
  });
});
