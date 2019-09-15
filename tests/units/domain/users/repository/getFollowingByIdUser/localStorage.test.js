const getFollowingByIdUserLocalStorage = require('@UserRepository/getFollowingByIdUser/localStorage');
const localDatabase = require('@UserMocks/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : get user followings by id user', () => {
  it('should get all user followings', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const followings = getFollowingByIdUserLocalStorage(idUser);

    // EXPECTED
    const expectedFollowers = localDatabase
      .favoriteUsers
      .filter((favoriteUser) => favoriteUser.idUser === idUser)
      .map((favoriteUser) => favoriteUser.idFavoriteUser);

    expect(followings).toMatchObject(expectedFollowers);
  });
});
