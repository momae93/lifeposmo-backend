const createUserLocalStorage = require('@UserRepository/createUser/localStorage');
const localDatabase = require('@UserMocks/data/localDatabase');
const basicUser = require('@UserMocks/data/users/basicUser');

describe('[MODULES][USERS][REPOSITORY][LOCAL STORAGE] : create user', () => {
  it('should success create an user', async () => {
    // LOCAL MOCKS
    const userDomainEntity = basicUser;

    // FUNCTION TESTED
    const usersBeforeCreation = [...localDatabase.users];
    const createdUser = createUserLocalStorage(userDomainEntity);
    const usersAfterCreation = [...localDatabase.users];

    // EXPECTED
    const expectedCreatedUser = {
      id: 3,
      ...basicUser,
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

    expect(usersAfterCreation.length).toBe(usersBeforeCreation.length + 1);
    expect(createdUser).toMatchObject(expectedCreatedUser);
    expect(createdUser).toMatchObject(expectedUserCreatedSchema);
  });
});
