const buildResolvers = require('../../../../../../src/modules/users/app/graphql/resolvers/');
const buildMockUserServices = require('../../../../../../src/modules/users/__mocks__/services/');
const buildMockPostServices = require('../../../../../../src/modules/posts/__mocks__/services/');
const mockUsers = require('../../../../../../src/modules/users/__mocks__/data/users/users');
const mockBasicUser = require('../../../../../../src/modules/users/__mocks__/data/users/basicUser');
const mockPosts = require('../../../../../../src/modules/posts/__mocks__/data/posts/posts');

describe('[MODULES][USERS][APP][GRAPHQL - RESOLVERS] : buildResolvers', () => {
  it('should build resolvers', async () => {
    // LOCAL MOCKS
    const mockPostServices = buildMockPostServices();
    const mockUserServices = buildMockUserServices();

    // FUNCTION TESTED
    const userResolvers = buildResolvers(mockUserServices, mockPostServices);

    // EXPECTED
    const expectedUserResolvers = {
      Mutation: expect.any(Object),
      Query: expect.any(Object),
      User: expect.any(Object),
    };

    expect(userResolvers).toMatchObject(expectedUserResolvers);
  });
});

describe('[MODULES][USERS][APP][GRAPHQL - RESOLVERS] : Query resolvers', () => {
  it('should success call * users *', () => {
    // LOCAL MOCKS
    const mockGetAllUsers = () => (mockUsers);
    const mockPostServices = buildMockPostServices();
    const mockUserServices = buildMockUserServices({ getAllUsers: mockGetAllUsers });
    const userResolvers = buildResolvers(mockUserServices, mockPostServices);

    // FUNCTION TESTED
    const users = userResolvers.Query.users();

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

    expect(mockUserServices.getAllUsers).toHaveBeenCalledTimes(1);
    expect(users).toMatchObject(expectedUsers);
    expect(users).toContainEqual(expect.objectContaining(expectedUserSchema));
  });

  it('should success call * user *', () => {
    // LOCAL MOCKS
    const idUser = 1;
    const mockGetUserById = (id) => mockUsers.find((user) => user.id === id);
    const mockPostServices = buildMockPostServices();
    const mockUserServices = buildMockUserServices({ getUserById: mockGetUserById });
    const userResolvers = buildResolvers(mockUserServices, mockPostServices);
    const queryArguments = { id: idUser };

    // FUNCTION TESTED
    const user = userResolvers.Query.user(null, queryArguments);
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

    expect(mockUserServices.getUserById).toHaveBeenCalledTimes(1);
    expect(mockUserServices.getUserById).toHaveBeenCalledWith(idUser);
    expect(user).toMatchObject(expectedUser);
    expect(user).toMatchObject(expectedUserFoundSchema);
  });
});

describe('[MODULES][USERS][APP][GRAPHQL - RESOLVERS] : Mutation resolvers', () => {
  it('should success call * createUser *', () => {
    // LOCAL MOCKS
    const mockNewUserId = 1;
    const mockCreateUser = (userToCreateEntity) => ({
      id: mockNewUserId,
      ...userToCreateEntity,
    });
    const mockPostServices = buildMockPostServices();
    const mockUserServices = buildMockUserServices({ createUser: mockCreateUser });
    const userResolvers = buildResolvers(mockUserServices, mockPostServices);
    const queryArguments = mockBasicUser;

    // FUNCTION TESTED
    const userCreated = userResolvers.Mutation.createUser(null, queryArguments);

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

    expect(mockUserServices.createUser).toHaveBeenCalledTimes(1);
    expect(mockUserServices.createUser).toHaveBeenCalledWith(mockBasicUser);
    expect(userCreated).toMatchObject(expectedUserCreatedSchema);
    expect(userCreated).toMatchObject(expectedUserCreated);
  });

  it('should success call * deleteUser *', () => {
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
    const mockPostServices = buildMockPostServices();
    const mockUserServices = buildMockUserServices({ deleteUser: mockDeleteUser });
    const userResolvers = buildResolvers(mockUserServices, mockPostServices);
    const queryArguments = {
      id: idUserToBeDeleted,
    };

    // FUNCTION TESTED
    const isUserDeleted = userResolvers.Mutation.deleteUser(null, queryArguments);

    // EXPECTED
    const expectedUserDeleted = true;

    expect(mockUserServices.deleteUser).toHaveBeenCalledTimes(1);
    expect(mockUserServices.deleteUser).toHaveBeenCalledWith(idUserToBeDeleted);
    expect(isUserDeleted).toBe(expectedUserDeleted);
  });
});

describe.only('[MODULES][USERS][APP][GRAPHQL - RESOLVERS] : User resolvers', () => {
  it('should success call * postsWritten *', () => {
    // LOCAL MOCKS
    const idAuthor = 1;
    const mockGetPostsByIdAuthor = (id) => {
      // Silly mocking of the behavior to ensure an idUser is passed to test
      if (id) {
        return mockPosts;
      }
      return false;
    };
    const mockPostServices = buildMockPostServices(
      { getPostsByIdAuthor: mockGetPostsByIdAuthor },
    );
    const mockUserServices = buildMockUserServices();
    const userResolvers = buildResolvers(mockUserServices, mockPostServices);
    const parentArguments = {
      id: idAuthor,
    };

    // FUNCTION TESTED
    const postsWritten = userResolvers.User.postsWritten(parentArguments, null);

    // EXPECTED SCHEMA

    const expectedPostSchema = {
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      solution: expect.any(String),
      idAuthor: expect.any(Number),
      totalClaps: expect.any(Number),
    };

    expect(mockPostServices.getPostsByIdAuthor).toHaveBeenCalledTimes(1);
    expect(mockPostServices.getPostsByIdAuthor).toHaveBeenCalledWith(idAuthor);
    expect(postsWritten).toContainEqual(expect.objectContaining(expectedPostSchema));
  });
});
