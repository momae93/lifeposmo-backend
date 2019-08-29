const deleteFavoriteUserLocalStorage = require('../../../../../../src/modules/users/repository/deleteFavoriteUser/localStorage');
const localDatabase = require('../../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : delete favorite user from favorite user id', () => {
  it('should success delete an user from an user id from local storage', async () => {
    // LOCAL MOCKS
    const idFavorite = 1;

    // FUNCTION TESTED
    const favoriteUsersBeforeDeletion = localDatabase.favoriteUsers;
    const isDeleted = deleteFavoriteUserLocalStorage(idFavorite);
    const favoriteUsersAfterDeletion = localDatabase.favoriteUsers;

    // EXPECTED
    const deletedFavoriteUser = localDatabase
      .favoriteUsers
      .find((favoriteUser) => favoriteUser.id === idFavorite);

    expect(isDeleted).toBe(true);
    expect(deletedFavoriteUser).toBeUndefined();
    expect(favoriteUsersAfterDeletion.length).toBe(favoriteUsersBeforeDeletion.length - 1);
    expect(favoriteUsersBeforeDeletion).not.toMatchObject(favoriteUsersAfterDeletion);
  });

  it('should fail delete an user from an user id from local storage', async () => {
    // LOCAL MOCKS
    const idUser = 88888888;

    // FUNCTION TESTED
    const usersBeforeDeletion = localDatabase.users;
    const isDeleted = deleteFavoriteUserLocalStorage(idUser);
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
