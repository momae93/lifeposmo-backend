const querySchemas = require('../../../../../../src/modules/posts/app/graphql/schemas/query');

describe('[MODULES][POSTS][APP][GRAPHQL - SCHEMAS] : query schemas', () => {
  it('should returns schema of queries', async () => {
    // FUNCTION TESTED
    expect(querySchemas).toMatchSnapshot();
  });
});
