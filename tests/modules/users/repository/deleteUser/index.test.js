const deleteUser = require('../../../../../src/modules/users/repository/deleteUser');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : delete user from user id', () => {
  it('should success delete an user from an user id', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const usersBeforeDeletion = localDatabase.users;
    const isDeleted = deleteUser()(idUser);
    const usersAfterDeletion = localDatabase.users;

    // EXPECTED
    const deletedUser = localDatabase
      .users
      .find((user) => user.id === idUser);

    expect(isDeleted).toBe(true);
    expect(deletedUser).toBeUndefined();
    expect(usersAfterDeletion.length).toBe(usersBeforeDeletion.length - 1);
    expect(usersBeforeDeletion).not.toMatchObject(usersAfterDeletion);
  });

  it('should fail delete an user from an user id', async () => {
    // LOCAL MOCKS
    const idUser = 88888888;

    // FUNCTION TESTED
    const usersBeforeDeletion = localDatabase.users;
    const isDeleted = deleteUser()(idUser);
    const usersAfterDeletion = localDatabase.users;

    // EXPECTED
    const deletedUser = localDatabase
      .users
      .find((user) => user.id === idUser);

    expect(isDeleted).toBe(false);
    expect(deletedUser).toBeUndefined();
    expect(usersAfterDeletion.length).toBe(usersBeforeDeletion.length);
    expect(usersBeforeDeletion).toMatchObject(usersAfterDeletion);
  });
});
