const buildMockServices = require('@UserMocks/services');

describe('[MODULES][USERS][__MOCKS__][SERVICES] : mockServices', () => {
  it('should returns an object containing mocked services', async () => {
    // FUNCTION TESTED
    const mockServices = buildMockServices();

    // EXPECTED
    const expectedMockServices = {
      getAllUsers: expect.any(Function),
      getUserById: expect.any(Function),
      deleteUser: expect.any(Function),
      createUser: expect.any(Function),
      followUser: expect.any(Function),
      unfollowUser: expect.any(Function),
    };

    expect(mockServices).toMatchSnapshot();
    expect(mockServices).toMatchObject(expectedMockServices);
  });
});
