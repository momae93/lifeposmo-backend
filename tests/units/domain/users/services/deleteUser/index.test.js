const deleteUser = require('@UserService/deleteUser');
const buildMockUserRepository = require('@UserMocks/repository');

describe('[MODULES][USERS][SERVICES] : delete user', () => {
  it('should success delete new user', async () => {
    // LOCAL MOCKS
    const deleteSucessed = true;
    const idUserToBeDeleted = 1;
    const mockDeleteUser = (idUser) => {
      // Silly mocking of the behavior to ensure an idUser is passed to test
      if (idUser) {
        return deleteSucessed;
      }
      return false;
    };
    const mockUserRepository = buildMockUserRepository({ deleteUser: mockDeleteUser });
    const mockBuildUserRepository = () => (mockUserRepository);

    // FUNCTION TESTED
    const isUserDeleted = deleteUser(mockBuildUserRepository)(idUserToBeDeleted);

    // EXPECTED
    const expectedUserDeleted = true;

    // ASSERTIONS
    expect(mockUserRepository.deleteUser).toHaveBeenCalledTimes(1);
    expect(mockUserRepository.deleteUser).toBeCalledWith(idUserToBeDeleted);
    expect(isUserDeleted).toBe(expectedUserDeleted);
  });
});
