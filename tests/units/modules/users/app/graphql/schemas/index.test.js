const schema = require('../../../../../../../src/modules/users/app/graphql/schemas');

describe('[MODULES][USERS][APP][GRAPHQL - SCHEMAS] : schemas', () => {
  it('should returns schema', async () => {
    // FUNCTION TESTED
    expect(schema).toMatchSnapshot();
  });
});
