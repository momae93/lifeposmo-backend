const getAllUsersLocalStorage = require('../../../../../src/modules/users/repository/getAllUsers/localStorage');
const mockUsers = require('../../../../../src/modules/users/__mocks__/data/users/users');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get all users', () => {
  it('should get all users from local storage', async () => {
    // FUNCTION TESTED
    const users = getAllUsersLocalStorage();

    // EXPECTED
    const expectedUsers = mockUsers;

    expect(users).toMatchObject(expectedUsers);
  });
});
