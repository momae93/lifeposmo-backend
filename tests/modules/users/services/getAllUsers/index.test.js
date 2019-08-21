const getAllUsers = require('../../../../../src/modules/users/services/getAllUsers');
const buildMockUsers = require('../../../../../src/modules/users/__mocks__/data/users/buildMockUsers');
const buildMockUserRepository = require('../../../../../src/modules/users/__mocks__/repository');

describe('[MODULES][USERS][SERVICES] : get all users', () => {
  it('should success get all users', async () => {
    const mockUsers = buildMockUsers();
    // LOCAL MOCKS
    const mockGetAllUsers = () => (mockUsers);
    const mockUserRepository = buildMockUserRepository({ getAllUsers: mockGetAllUsers });
    const mockBuildUserRepository = () => (mockUserRepository);

    // FUNCTION TESTED
    const users = getAllUsers(mockBuildUserRepository)();

    // EXPECTED
    const expectedUsers = mockUsers;
    const expectedUserSchema = {
      id: expect.any(Number),
      firstname: expect.any(String),
      lastname: expect.any(String),
      username: expect.any(String),
      description: expect.any(String),
      birthdate: expect.any(Date),
      password: expect.any(String),
      isMale: expect.any(Boolean),
    };

    // ASSERTIONS
    expect(mockUserRepository.getAllUsers).toHaveBeenCalledTimes(1);
    expect(users).toMatchObject(expectedUsers);
    expect(users).toContainEqual(expect.objectContaining(expectedUserSchema));
  });
});
