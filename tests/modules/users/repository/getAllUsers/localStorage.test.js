const getAllUsersLocalStorage = require('../../../../../src/modules/users/repository/getAllUsers/localStorage');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get all users', () => {
  it('should get all users from local storage', async () => {
    // FUNCTION TESTED
    const users = getAllUsersLocalStorage();

    // EXPECTED
    const expectedUsers = localDatabase.users;

    expect(users).toMatchObject(expectedUsers);
  });
});
