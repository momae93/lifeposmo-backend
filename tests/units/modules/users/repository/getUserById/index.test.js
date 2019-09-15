const getUserById = require('@UserRepository/getUserById');
const localDatabase = require('@UserMocks/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : get user by id', () => {
  it('should get an user given a user id', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const foundUser = getUserById()(idUser);

    // EXPECTED
    const expectedUser = localDatabase
      .users
      .find((user) => user.id === idUser);

    expect(foundUser).toMatchObject(expectedUser);
  });
});
