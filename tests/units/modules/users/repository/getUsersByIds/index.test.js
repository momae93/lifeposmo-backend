const getUsersByIds = require('../../../../../../src/modules/users/repository/getUsersByIds/');
const localDatabase = require('../../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : get users by ids', () => {
  it('should get all users from a list of ids', async () => {
    // LOCAL MOCKS
    const idUsers = [1, 2];

    // FUNCTION TESTED
    const foundUsers = getUsersByIds()(idUsers);

    // EXPECTED
    const expectedUsers = localDatabase
      .users
      .filter((user) => idUsers.includes(user.id));

    expect(foundUsers).toMatchObject(expectedUsers);
  });
});
