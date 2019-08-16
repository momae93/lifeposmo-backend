const getAllUsers = require('../../../../../src/modules/users/repository/getAllUsers');
const mockUsers = require('../../../../../src/modules/users/__mocks__/data/users/users');

describe('[MODULES][USERS][REPOSITORY] : get all users', () => {
  it('should get all users', async () => {
    // FUNCTION TESTED
    const users = getAllUsers()();

    // EXPECTED
    const expectedUsers = mockUsers;

    expect(users).toMatchObject(expectedUsers);
  });
});
