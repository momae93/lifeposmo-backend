const buildMockRepository = require('../../../../../../src/modules/users/__mocks__/repository');

describe('[MODULES][USERS][__MOCKS__][REPOSITORY] : mockRepository', () => {
  it('should returns an object containing mocked repository', async () => {
    // FUNCTION TESTED
    const mockRepository = buildMockRepository();

    // EXPECTED
    const expectedMockRepository = {
      getAllUsers: expect.any(Function),
      getUserById: expect.any(Function),
      deleteUser: expect.any(Function),
      createUser: expect.any(Function),
      createFavoriteUser: expect.any(Function),
      deleteFavoriteUser: expect.any(Function),
    };

    expect(mockRepository).toMatchSnapshot();
    expect(mockRepository).toMatchObject(expectedMockRepository);
  });
});
