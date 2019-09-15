const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { buildMockDatabase } = require('../../../helpers/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');

describe('[INTEGRATION][POSTS] : Get post by id author', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockPostRepository = buildMockPostRepository({
      getPostsByIdAuthor: (id) => (mockDatabase
        .posts
        .filter((post) => post.idAuthor === id)),
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

  it('should success returns all fields when calling * postsWrittenBy * with id author', async () => {
    // QUERY
    const GET_POSTS_BY_ID_AUTHOR_REQUEST = `
      query {
        postsWrittenBy(idAuthor: 1) {
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
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_POSTS_BY_ID_AUTHOR_REQUEST });

    expect(data).toMatchSnapshot();
  });

  it('should success returns some fields when calling * postsWrittenBy * with id author', async () => {
    // QUERY
    const GET_POSTS_BY_ID_AUTHOR_REQUEST = `
      query {
        postsWrittenBy(idAuthor: 1) {
            title
            totalClaps
        }
      }
    `;

    const { data } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_POSTS_BY_ID_AUTHOR_REQUEST });

    expect(data).toMatchSnapshot();
  });

  it('should success returns all fields with their author when calling * postsWrittenBy * with id author', async () => {
    // QUERY
    const GET_POSTS_BY_ID_AUTHOR_REQUEST = `
      query {
        postsWrittenBy(idAuthor: 1) {
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
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_POSTS_BY_ID_AUTHOR_REQUEST });

    expect(data).toMatchSnapshot();
  });
});
