const followUser = require('@UserService/followUser');
const buildMockUserRepository = require('@UserMocks/repository');
const basicFavoriteUser = require('@UserMocks/data/favoriteUsers/basicFavoriteUser');

describe('[MODULES][USERS][SERVICES] : follow favorite user', () => {
  it('should success follow favorite user', async () => {
    // LOCAL MOCKS
    const mockNewFavoriteUserId = 1;
    const mockCreateFavoriteUser = (favoriteUserToCreateEntity) => ({
      id: mockNewFavoriteUserId,
      ...favoriteUserToCreateEntity,
    });
    const mockUserRepository = buildMockUserRepository(
      { createFavoriteUser: mockCreateFavoriteUser },
    );
    const mockBuildUserRepository = () => (mockUserRepository);
    const favoriteUserDomainEntity = basicFavoriteUser;

    // FUNCTION TESTED
    const userCreated = followUser(mockBuildUserRepository)(favoriteUserDomainEntity);

    // EXPECTED
    const expectedUserCreated = {
      id: mockNewFavoriteUserId,
      ...basicFavoriteUser,
    };

    const expectedUserCreatedSchema = {
      id: expect.any(Number),
      idUser: expect.any(Number),
      idFavoriteUser: expect.any(Number),
    };

    // ASSERTIONS
    expect(mockUserRepository.createFavoriteUser).toHaveBeenCalledTimes(1);
    expect(mockUserRepository.createFavoriteUser).toBeCalledWith(basicFavoriteUser);
    expect(userCreated).toMatchObject(expectedUserCreatedSchema);
    expect(userCreated).toMatchObject(expectedUserCreated);
  });
});
