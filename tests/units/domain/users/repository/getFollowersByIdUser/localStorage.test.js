const getFollowersByIdUserLocalStorage = require('@UserRepository/getFollowersByIdUser/localStorage');
const localDatabase = require('@UserMocks/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : get user followers by id user', () => {
  it('should get all user followers from local storage', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const followers = getFollowersByIdUserLocalStorage(idUser);

    // EXPECTED
    const expectedFollowers = localDatabase
      .favoriteUsers
      .filter((favoriteUser) => favoriteUser.idFavoriteUser === idUser)
      .map((favoriteUser) => favoriteUser.idUser);

    expect(followers).toMatchObject(expectedFollowers);
  });
});
