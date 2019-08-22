const getFollowersByIdUser = require('../../../../../src/modules/users/repository/getFollowersByIdUser/');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][REPOSITORY] : get user followers by id user', () => {
  it('should get all user followers', async () => {
    // LOCAL MOCKS
    const idUser = 1;

    // FUNCTION TESTED
    const followers = getFollowersByIdUser()(idUser);

    // EXPECTED
    const expectedFollowers = localDatabase
      .favoriteUsers
      .filter((favoriteUser) => favoriteUser.idFavoriteUser === idUser)
      .map((favoriteUser) => favoriteUser.idUser);

    expect(followers).toMatchObject(expectedFollowers);
  });
});
