const getFollowersByIdUserLocalStorage = require('../../../../../src/modules/users/repository/getFollowersByIdUser/localStorage');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

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
