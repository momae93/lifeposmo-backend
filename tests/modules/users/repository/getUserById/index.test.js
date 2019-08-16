const getUserById = require('../../../../../src/modules/users/repository/getUserById');
const mockUsers = require('../../../../../src/modules/users/__mocks__/data/users/users');

describe('[MODULES][USERS][REPOSITORY] : get by user id', () => {
  it('should get an user given a user id', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const foundUser = getUserById()(idUser);

    // EXPECTED
    const expectedUser = mockUsers.find((user) => user.id === idUser);

    expect(foundUser).toMatchObject(expectedUser);
  });
});
