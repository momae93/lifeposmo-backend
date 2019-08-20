const schema = require('../../../../../../src/modules/posts/app/graphql/schemas');

describe('[MODULES][POSTS][APP][GRAPHQL - SCHEMAS] : schemas', () => {
  it('should returns schema', async () => {
    // FUNCTION TESTED
    expect(schema).toMatchSnapshot();
  });
});
