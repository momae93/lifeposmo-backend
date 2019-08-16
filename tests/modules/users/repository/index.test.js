const buildUserRepository = require('../../../../src/modules/users/repository/');

describe('[MODULES][USERS][REPOSITORY] : user repository', () => {
  it('should build user repository with no db client passed', async () => {
    // LOCAL MOCKS
    const mockDbClient = null;

    // FUNCTION TESTED
    const userRepository = buildUserRepository(mockDbClient);

    // EXPECTED
    const expectedRepository = {
      createUser: expect.any(Function),
      deleteUser: expect.any(Function),
      getAllUsers: expect.any(Function),
      getUserById: expect.any(Function),
    };

    expect(userRepository).toMatchObject(expectedRepository);
  });
});
