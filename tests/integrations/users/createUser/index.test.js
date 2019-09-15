const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const basicUser = require('@UserMocks/data/users/basicUser');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { buildMockDatabase } = require('../../../helpers/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');

describe('[INTEGRATION][USERS] : Create user', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockUserRepository = buildMockUserRepository({
      createUser: (userEntity) => {
        const maxId = Math.max(...mockDatabase
          .users
          .map((user) => user.id)) || 0;

        const newId = maxId + 1;
        const createdUser = {
          id: newId,
          ...userEntity,
        };
        mockDatabase.users.push({ id: newId, ...userEntity });

        return createdUser;
      },
    });
    const mockPostRepository = buildMockPostRepository({
      getPostsByIdAuthor: (idAuthor) => (mockDatabase
        .posts
        .filter((posts) => posts.idAuthor === idAuthor)),
    });
    const mockBuildUserRepository = () => (mockUserRepository);
    const mockBuildPostRepository = () => (mockPostRepository);
    const userServices = buildUserServices(mockDbServices, mockBuildUserRepository);
    const postServices = buildPostServices(mockDbServices, mockBuildPostRepository);
    const services = {
      userServices,
      postServices,
    };

    // SETUP SERVER
    server = buildGraphqlServer(services);

    // STARTING SERVER
    await server.start();
  });

  beforeEach(() => {
    mockDatabase = buildMockDatabase();
  });

  afterAll(async (done) => {
    // STOPPING SERVER SERVER
    await server.stop(done);
  });

  it('should success create user and get all fields when calling * createUser *', async () => {
    // QUERY
    const CREATE_USER_REQUEST = `
      mutation {
        createUser(
          firstname: "${basicUser.firstname}",
          lastname: "${basicUser.lastname}",
          description: "${basicUser.description}"
          username: "${basicUser.username}"
          password: "${basicUser.password}"
          isMale: ${basicUser.isMale},
          birthdate: "2019-09-20"
        ) {
            id
            firstname
            lastname
            description
            username
            password
            isMale
            birthdate
        }
      }
    `;

    const { data: createdUser } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: CREATE_USER_REQUEST });

    expect(createdUser).toMatchSnapshot();
  });

  it('should success returns all fields when calling * users * with their postwritten', async () => {
    // QUERY
    const CREATE_USER_REQUEST = `
      mutation {
        createUser(
          firstname: "${basicUser.firstname}",
          lastname: "${basicUser.lastname}",
          description: "${basicUser.description}"
          username: "${basicUser.username}"
          password: "${basicUser.password}"
          isMale: ${basicUser.isMale},
          birthdate: "2019-09-20"
        ) {
            firstname
            lastname
            description
            postsWritten {
              id
              title
              description
              solution
              idAuthor
              totalClaps
            }
          }
        }
      `;

    const { data: createdUser } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: CREATE_USER_REQUEST });

    expect(createdUser).toMatchSnapshot();
  });
});
