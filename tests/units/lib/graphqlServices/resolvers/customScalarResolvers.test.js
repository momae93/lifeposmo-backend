const customScalarResolvers = require('../../../../../src/lib/graphqlServices/resolvers/customScalarResolvers');

describe('[LIB][GRAPHQL][RESOLVERS] : customScalarResolvers', () => {
  it('should match snapshot lib graphql customScalarResolvers', async () => {
    expect(customScalarResolvers).toMatchSnapshot();
  });
});
