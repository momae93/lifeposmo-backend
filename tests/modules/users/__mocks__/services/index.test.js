const buildMockServices = require('../../../../../src/modules/users/__mocks__/services');

describe('[MODULES][USERS][__MOCKS__][REPOSITORY] : mockRepository', () => {
  it('should returns an object containing mocked repository', async () => {
    // FUNCTION TESTED
    const mockServices = buildMockServices();

    // EXPECTED
    const expectedMockServices = {
      getAllUsers: expect.any(Function),
      getUserById: expect.any(Function),
      deleteUser: expect.any(Function),
      createUser: expect.any(Function),
    };

    expect(mockServices).toMatchObject(expectedMockServices);
  });
});
