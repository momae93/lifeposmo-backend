const getUserByIdLocalStorage = require('../../../../../src/modules/users/repository/getUserById/localStorage');
const mockUsers = require('../../../../../src/modules/users/__mocks__/data/users/users');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get user by id', () => {
  it('should get all users from local storage', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const foundUser = getUserByIdLocalStorage(idUser);

    // EXPECTED
    const expectedUser = mockUsers.find((user) => user.id === idUser);

    expect(foundUser).toMatchObject(expectedUser);
  });
});
