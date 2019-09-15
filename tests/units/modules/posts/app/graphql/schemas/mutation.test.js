const mutationSchemas = require('@PostApp/graphql/schemas/mutation');

describe('[MODULES][POSTS][APP][GRAPHQL - SCHEMAS] : mutation schemas', () => {
  it('should returns schema of mutations', async () => {
    // FUNCTION TESTED
    expect(mutationSchemas).toMatchSnapshot();
  });
});
