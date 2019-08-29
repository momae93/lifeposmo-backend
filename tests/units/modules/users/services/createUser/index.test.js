const createUser = require('../../../../../../src/modules/users/services/createUser');
const buildMockUserRepository = require('../../../../../../src/modules/users/__mocks__/repository');
const mockBasicUser = require('../../../../../../src/modules/users/__mocks__/data/users/basicUser');

describe('[MODULES][USERS][SERVICES] : create user', () => {
  it('should success create new user', async () => {
    // LOCAL MOCKS
    const mockNewUserId = 1;
    const mockCreateUser = (userToCreateEntity) => ({
      id: mockNewUserId,
      ...userToCreateEntity,
    });
    const mockUserRepository = buildMockUserRepository({ createUser: mockCreateUser });
    const mockBuildUserRepository = () => (mockUserRepository);
    const userDomainEntity = mockBasicUser;

    // FUNCTION TESTED
    const userCreated = createUser(mockBuildUserRepository)(userDomainEntity);

    // EXPECTED
    const expectedUserCreated = {
      id: mockNewUserId,
      ...mockBasicUser,
    };

    const expectedUserCreatedSchema = {
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
    expect(mockUserRepository.createUser).toHaveBeenCalledTimes(1);
    expect(mockUserRepository.createUser).toBeCalledWith(mockBasicUser);
    expect(userCreated).toMatchObject(expectedUserCreatedSchema);
    expect(userCreated).toMatchObject(expectedUserCreated);
  });
});
