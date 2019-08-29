const getAllUsers = require('../../../../../../src/modules/users/repository/getAllUsers');
const localDatabase = require('../../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : get all users', () => {
  it('should get all users', async () => {
    // FUNCTION TESTED
    const users = getAllUsers()();

    // EXPECTED
    const expectedUsers = localDatabase.users;

    expect(users).toMatchObject(expectedUsers);
  });
});
