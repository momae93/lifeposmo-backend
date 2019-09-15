const UserSchema = require('@UserApp/graphql/schemas/User');

describe('[MODULES][USERS][APP][GRAPHQL - SCHEMAS] : User schemas', () => {
  it('should returns schema of User', async () => {
    // FUNCTION TESTED
    expect(UserSchema).toMatchSnapshot();
  });
});
