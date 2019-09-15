const getUsersByIdsLocalStorage = require('@UserRepository/getUsersByIds/localStorage');
const localDatabase = require('@UserMocks/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get users by ids', () => {
  it('should get all users from a list of ids', async () => {
    // LOCAL MOCKS
    const idUsers = [1, 2];

    // FUNCTION TESTED
    const foundUsers = getUsersByIdsLocalStorage(idUsers);

    // EXPECTED
    const expectedUsers = localDatabase
      .users
      .filter((user) => idUsers.includes(user.id));

    expect(foundUsers).toMatchObject(expectedUsers);
  });
});
