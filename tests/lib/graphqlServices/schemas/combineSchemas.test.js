const combineSchemas = require('../../../../src/lib/graphqlServices/schemas/combineSchemas');

describe('[LIB][GRAPHQL][RESOLVERS] : combineSchemas', () => {
  it('should match snapshot lib graphql combineSchemas', async () => {
    const schemas = combineSchemas();

    expect(schemas).toMatchSnapshot();
  });
});
