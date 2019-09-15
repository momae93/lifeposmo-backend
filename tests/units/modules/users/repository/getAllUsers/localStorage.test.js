const getAllUsersLocalStorage = require('@UserRepository/getAllUsers/localStorage');
const localDatabase = require('@UserMocks/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get all users', () => {
  it('should get all users from local storage', async () => {
    // FUNCTION TESTED
    const users = getAllUsersLocalStorage();

    // EXPECTED
    const expectedUsers = localDatabase.users;

    expect(users).toMatchObject(expectedUsers);
  });
});
