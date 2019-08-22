const getFollowingByIdUserLocalStorage = require('../../../../../src/modules/users/repository/getFollowingByIdUser/localStorage');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

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
