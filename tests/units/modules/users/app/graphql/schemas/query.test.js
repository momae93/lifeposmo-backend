const querySchemas = require('@UserApp/graphql/schemas/query');

describe('[MODULES][USERS][APP][GRAPHQL - SCHEMAS] : query schemas', () => {
  it('should returns schema of queries', async () => {
    // FUNCTION TESTED
    expect(querySchemas).toMatchSnapshot();
  });
});
