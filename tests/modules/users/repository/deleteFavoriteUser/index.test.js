const deleteFavoriteUser = require('../../../../../src/modules/users/repository/deleteFavoriteUser/');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY]: delete favorite user from favorite user id', () => {
  it('should success delete an user from an user id', async () => {
    // LOCAL MOCKS
    const idFavorite = 1;

    // FUNCTION TESTED
    const favoriteUsersBeforeDeletion = localDatabase.favoriteUsers;
    const isDeleted = deleteFavoriteUser()(idFavorite);
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

  it('should fail delete an favorite user from an favorite user id from local storage', async () => {
    // LOCAL MOCKS
    const idFavorite = 88888888;

    // FUNCTION TESTED
    const favoriteUsersBeforeDeletion = localDatabase.favoriteUsers;
    const isDeleted = deleteFavoriteUser()(idFavorite);
    const favoriteUsersAfterDeletion = localDatabase.favoriteUsers;

    // EXPECTED
    const deletedFavoriteUser = localDatabase
      .favoriteUsers
      .find((favoriteUser) => favoriteUser.id === idFavorite);

    expect(isDeleted).toBe(false);
    expect(deletedFavoriteUser).toBeUndefined();
    expect(favoriteUsersAfterDeletion.length).toBe(favoriteUsersBeforeDeletion.length);
    expect(favoriteUsersBeforeDeletion).toMatchObject(favoriteUsersAfterDeletion);
  });
});
