const deleteFavoriteUser = require('../../../../../src/modules/users/services/deleteFavoriteUser');
const buildMockUserRepository = require('../../../../../src/modules/users/__mocks__/repository');

describe('[MODULES][USERS][SERVICES] : delete favorite user', () => {
  it('should success delete new favorite user', async () => {
    // LOCAL MOCKS
    const deleteSucessed = true;
    const idUFavoriteUser = 1;
    const mockDeleteFavoriteUser = (idUser) => {
      // Silly mocking of the behavior to ensure an idUser is passed to test
      if (idUser) {
        return deleteSucessed;
      }
      return false;
    };
    const mockUserRepository = buildMockUserRepository(
      { deleteFavoriteUser: mockDeleteFavoriteUser },
    );
    const mockBuildUserRepository = () => (mockUserRepository);

    // FUNCTION TESTED
    const isFavoriteUserDeleted = deleteFavoriteUser(mockBuildUserRepository)(idUFavoriteUser);

    // EXPECTED
    const expectedFavoriteUserDeleted = true;

    // ASSERTIONS
    expect(mockUserRepository.deleteFavoriteUser).toHaveBeenCalledTimes(1);
    expect(mockUserRepository.deleteFavoriteUser).toBeCalledWith(idUFavoriteUser);
    expect(isFavoriteUserDeleted).toBe(expectedFavoriteUserDeleted);
  });
});
