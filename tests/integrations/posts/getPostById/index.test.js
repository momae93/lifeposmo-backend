const axios = require('axios');

const { buildMockDatabase } = require('../../../helpers/');
const { buildGraphqlServer } = require('../../../../src/bin/servers/index');
const { buildServices: buildUserServices } = require('../../../../src/modules/users');
const { buildServices: buildPostServices } = require('../../../../src/modules/posts');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');
const buildMockUserRepository = require('../../../../src/modules/users/__mocks__/repository');
const buildMockPostRepository = require('../../../../src/modules/posts/__mocks__/repository');

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
