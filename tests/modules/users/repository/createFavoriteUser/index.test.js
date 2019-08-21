const createFavoriteUser = require('../../../../../src/modules/users/repository/createFavoriteUser');
const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');
const basicFavoriteUser = require('../../../../../src/modules/users/__mocks__/data/favoriteUsers/basicFavoriteUser');

describe('[MODULES][USERS][REPOSITORY] : create favorite user', () => {
  it('should success create a favorite user', async () => {
    // LOCAL MOCKS
    const favoriteUserDomainEntity = basicFavoriteUser;

    // FUNCTION TESTED
    const favoriteUsersBeforeCreation = [...localDatabase.favoriteUsers];
    const createdFavoriteUser = createFavoriteUser()(favoriteUserDomainEntity);
    const favoriteUsersAfterCreation = [...localDatabase.favoriteUsers];

    // EXPECTED
    const expectedCreatedFavoriteUser = {
      id: 2,
      ...basicFavoriteUser,
    };

    const expectedFavoriteUserCreatedSchema = {
      id: expect.any(Number),
      idUser: expect.any(Number),
      idFavoriteUser: expect.any(Number),
    };

    expect(favoriteUsersAfterCreation.length).toBe(favoriteUsersBeforeCreation.length + 1);
    expect(createdFavoriteUser).toMatchObject(expectedCreatedFavoriteUser);
    expect(createdFavoriteUser).toMatchObject(expectedFavoriteUserCreatedSchema);
  });
});
