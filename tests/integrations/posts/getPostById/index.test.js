const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');
const { buildMockDatabase } = require('../../../helpers/');

describe('[INTEGRATION][POSTS] : Get post by id', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockPostRepository = buildMockPostRepository({
      getPostById: (idPost) => (mockDatabase
        .posts
        .find((post) => post.id === idPost)),
    });
    const mockUserRepository = buildMockUserRepository({
      getUserById: (id) => (mockDatabase
        .users
        .find((user) => user.id === id)),
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

  it('should success returns all fields when existing * post * with id post', async () => {
    // QUERY
    const GET_POST_BY_ID_REQUEST = `
      query {
        post(id: 1) {
          id
          title
          description
          solution
          totalClaps
          idAuthor
        }
      }
    `;

    const { data } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_POST_BY_ID_REQUEST });

    expect(data).toMatchSnapshot();
  });

  it('should success returns some fields when calling * post * with id post', async () => {
    // QUERY
    const GET_POST_BY_ID_REQUEST = `
      query {
        post(id: 1) {
            title
            totalClaps
        }
      }
    `;

    const { data } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_POST_BY_ID_REQUEST });

    expect(data).toMatchSnapshot();
  });

  it('should success returns all fields when calling * post * with their author', async () => {
    // QUERY
    const GET_POST_BY_ID_REQUEST = `
      query {
        post(id: 1) {
          title
          totalClaps
          author {
            id
            firstname
            lastname
            username
            birthdate
            isMale
            description
          }
        }
      }
    `;

    const { data } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_POST_BY_ID_REQUEST });

    expect(data).toMatchSnapshot();
  });
});
