const getUserById = require('../../../../../src/modules/users/services/getUserById');
const mockUsers = require('../../../../../src/modules/users/__mocks__/data/users/users');
const buildMockUserRepository = require('../../../../../src/modules/users/__mocks__/repository');

describe('[MODULES][USERS][SERVICES] : get user by id user', () => {
  it('should success returns a user from an id', async () => {
    // LOCAL MOCKS
    const idUserToBeGet = 1;
    const mockGetUserById = (idUser) => mockUsers.find((user) => user.id === idUser);
    const mockUserRepository = buildMockUserRepository({ getUserById: mockGetUserById });
    const mockBuildUserRepository = () => (mockUserRepository);

    // FUNCTION TESTED
    const user = getUserById(mockBuildUserRepository)(idUserToBeGet);

    // EXPECTED
    const BIRTHDATE_USER_ID_ONE = new Date(1996, 8, 28);
    const expectedUser = {
      id: 1,
      username: 'mickaelau',
      password: 'NotSoEncryptedPwd',
      firstname: 'Mickael',
      lastname: 'AU',
      description: 'Description of Mickael Au',
      isMale: true,
      birthdate: BIRTHDATE_USER_ID_ONE,
    };

    const expectedUserFoundSchema = {
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
    expect(mockUserRepository.getUserById).toHaveBeenCalledTimes(idUserToBeGet);
    expect(mockUserRepository.getUserById).toBeCalledWith(idUserToBeGet);
    expect(user).toMatchObject(expectedUser);
    expect(user).toMatchObject(expectedUserFoundSchema);
  });
});
