const getUserByIdLocalStorage = require('../../../../../src/modules/users/repository/getUserById/localStorage');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get user by id', () => {
  it('should get all users from local storage', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const foundUser = getUserByIdLocalStorage(idUser);

    // EXPECTED
    const expectedUser = localDatabase
      .users
      .find((user) => user.id === idUser);

    expect(foundUser).toMatchObject(expectedUser);
  });
});
