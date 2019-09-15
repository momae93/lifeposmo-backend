const getAllUsers = require('@UserRepository/getAllUsers');
const localDatabase = require('@UserMocks/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : get all users', () => {
  it('should get all users', async () => {
    // FUNCTION TESTED
    const users = getAllUsers()();

    // EXPECTED
    const expectedUsers = localDatabase.users;

    expect(users).toMatchObject(expectedUsers);
  });
});
