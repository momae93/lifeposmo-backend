const getFollowingByIdUser = require('../../../../../src/modules/users/repository/getFollowingByIdUser/');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : get user followings by id user', () => {
  it('should get all user followings', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const followings = getFollowingByIdUser()(idUser);

    // EXPECTED
    const expectedFollowers = localDatabase
      .favoriteUsers
      .filter((favoriteUser) => favoriteUser.idUser === idUser)
      .map((favoriteUser) => favoriteUser.idFavoriteUser);

    expect(followings).toMatchObject(expectedFollowers);
  });
});
