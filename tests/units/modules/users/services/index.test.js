const buildUserServices = require('../../../../../src/modules/users/services/');

describe('[MODULES][USERS][SERVICES] : user services', () => {
  it('should build user services', async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockBuildUserRepository = () => ({
      createUser: () => {},
      deleteUser: () => {},
      getAllUsers: () => {},
      getUserById: () => {},
    });

    // FUNCTION TESTED
    const userServices = buildUserServices(mockDbServices, mockBuildUserRepository);

    // EXPECTED
    const expecteduserServices = {
      createUser: expect.any(Function),
      deleteUser: expect.any(Function),
      getAllUsers: expect.any(Function),
      getUserById: expect.any(Function),
      followUser: expect.any(Function),
      unfollowUser: expect.any(Function),
    };

    expect(userServices).toMatchSnapshot();
    expect(userServices).toMatchObject(expecteduserServices);
  });
});
