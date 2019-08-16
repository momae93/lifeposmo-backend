const customScalarSchemas = require('../../../../src/lib/graphqlServices/schemas/customScalarSchemas');

describe('[LIB][GRAPHQL][RESOLVERS] : customScalarSchemas', () => {
  it('should match snapshot lib graphql customScalarSchemas', async () => {
    expect(customScalarSchemas).toMatchSnapshot();
  });
});
