const getUserByIdLocalStorage = require('@UserRepository/getUserById/localStorage');
const localDatabase = require('@UserMocks/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get user by id', () => {
  it('should get an user given a user id from local storage', async () => {
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
