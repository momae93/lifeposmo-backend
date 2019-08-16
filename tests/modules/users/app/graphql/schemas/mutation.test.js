const mutationSchemas = require('../../../../../../src/modules/users/app/graphql/schemas/mutation');

describe('[MODULES][USERS][APP][GRAPHQL - SCHEMAS] : mutation schemas', () => {
  it('should returns schema of mutations', async () => {
    // FUNCTION TESTED
    expect(mutationSchemas).toMatchSnapshot();
  });
});
