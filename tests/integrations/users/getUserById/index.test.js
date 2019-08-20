const axios = require('axios');

const { buildMockDatabase } = require('../../../helpers/');
const { buildGraphqlServer } = require('../../../../src/bin/servers/index');
const { buildServices: buildUserServices } = require('../../../../src/modules/users');
const { buildServices: buildPostServices } = require('../../../../src/modules/posts');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');
const buildMockUserRepository = require('../../../../src/modules/users/__mocks__/repository');
const buildMockPostRepository = require('../../../../src/modules/posts/__mocks__/repository');

describe('[INTEGRATION][USERS] : Get user by id', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockUserRepository = buildMockUserRepository({
      getUserById: (id) => (mockDatabase
        .users
        .find((user) => user.id === id)),
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

  it('should success returns all fields when existing * user * with id user', async () => {
    // QUERY
    const GET_USER_BY_ID_REQUEST = `
      query {
        user(id: 1) {
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

    const { data } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_USER_BY_ID_REQUEST });

    expect(data).toMatchSnapshot();
  });

  it('should success returns some fields when calling * user * with id user', async () => {
    // QUERY
    const GET_USER_BY_ID_REQUEST = `
      query {
        user(id: 1) {
            firstname
            lastname
            description
        }
      }
    `;

    const { data } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_USER_BY_ID_REQUEST });

    expect(data).toMatchSnapshot();
  });

  it('should success returns all fields when calling * user * with their postwritten', async () => {
    // QUERY
    const GET_USER_BY_ID_REQUEST = `
      query {
        user(id: 1) {
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

    const { data } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_USER_BY_ID_REQUEST });

    expect(data).toMatchSnapshot();
  });
});
