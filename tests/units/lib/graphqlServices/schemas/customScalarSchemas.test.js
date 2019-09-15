const customScalarSchemas = require('@GraphqlService/schemas/customScalarSchemas');

describe('[LIB][GRAPHQL][RESOLVERS] : customScalarSchemas', () => {
  it('should match snapshot lib graphql customScalarSchemas', async () => {
    expect(customScalarSchemas).toMatchSnapshot();
  });
});
