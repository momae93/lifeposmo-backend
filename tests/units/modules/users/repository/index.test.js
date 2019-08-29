const buildUserRepository = require('../../../../../src/modules/users/repository/');

describe('[MODULES][USERS][REPOSITORY] : user repository', () => {
  it('should build user repository with no db client passed', async () => {
    // LOCAL MOCKS
    const mockDbClient = null;

    // FUNCTION TESTED
    const userRepository = buildUserRepository(mockDbClient);

    // EXPECTED
    const expectedRepository = {
      createUser: expect.any(Function),
      createFavoriteUser: expect.any(Function),
      deleteUser: expect.any(Function),
      getAllUsers: expect.any(Function),
      getUserById: expect.any(Function),
      getFollowersByIdUser: expect.any(Function),
      getFollowingByIdUser: expect.any(Function),
      deleteFavoriteUser: expect.any(Function),
    };

    expect(userRepository).toMatchSnapshot();
    expect(userRepository).toMatchObject(expectedRepository);
  });
});
