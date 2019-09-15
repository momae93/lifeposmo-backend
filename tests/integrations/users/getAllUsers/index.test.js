const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { buildMockDatabase } = require('../../../helpers/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');

describe('[INTEGRATION][USERS] : Get all user', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockUserRepository = buildMockUserRepository({
      getAllUsers: () => (mockDatabase.users),
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

  afterAll(async () => {
    // STOPPING SERVER SERVER
    await server.stop();
  });

  it('should success returns all fields when calling * users * with all its fields', async () => {
    // QUERY
    const GET_ALL_USERS_REQUEST = `
      query {
        users {
          id
          firstname
          lastname
          username
          password
          description
          birthdate
          isMale
        }
      }
    `;

    const { data: users } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_ALL_USERS_REQUEST });

    expect(users).toMatchSnapshot();
  });

  it('should success returns some fields when calling * users * with some of its fields', async () => {
    // QUERY
    const GET_ALL_USERS_REQUEST = `
      query {
        users {
          firstname
          lastname
          description
        }
      }
    `;

    const { data: users } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_ALL_USERS_REQUEST });

    expect(users).toMatchSnapshot();
  });

  it('should success returns all fields when calling * users * with their postwritten', async () => {
    // QUERY
    const GET_ALL_USERS_REQUEST = `
      query {
        users {
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

    const { data: users } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_ALL_USERS_REQUEST });

    expect(users).toMatchSnapshot();
  });
});
