const axios = require('axios');

const { buildMockDatabase } = require('../../../helpers/');
const { buildGraphqlServer } = require('../../../../src/bin/servers/index');
const { buildServices: buildUserServices } = require('../../../../src/modules/users');
const { buildServices: buildPostServices } = require('../../../../src/modules/posts');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');
const buildMockUserRepository = require('../../../../src/modules/users/__mocks__/repository');
const buildMockPostRepository = require('../../../../src/modules/posts/__mocks__/repository');

describe('[INTEGRATION][POSTS] : Get all posts', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockPostRepository = buildMockPostRepository({
      getAllPosts: () => (mockDatabase.posts),
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

  it('should success returns all fields when calling * posts * with all its fields', async () => {
    // QUERY
    const GET_ALL_POSTS_REQUEST = `
      query {
        posts {
          id
          title
          description
          solution
          totalClaps
          idAuthor
        }
      }
    `;

    const { data: posts } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_ALL_POSTS_REQUEST });

    expect(posts).toMatchSnapshot();
  });

  it('should success returns some fields when calling * posts * with some of its fields', async () => {
    // QUERY
    const GET_ALL_POSTS_REQUEST = `
      query {
        posts {
          title
          totalClaps
        }
      }
    `;

    const { data: posts } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_ALL_POSTS_REQUEST });

    expect(posts).toMatchSnapshot();
  });

  it('should success returns all fields when calling * posts * with their author', async () => {
    // QUERY
    const GET_ALL_USERS_REQUEST = `
      query {
        posts {
          title
          totalClaps
          author {
            id
            firstname
            lastname
            description
            username
            birthdate
            isMale
          }
        }
      }
    `;

    const { data: users } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: GET_ALL_USERS_REQUEST });

    expect(users).toMatchSnapshot();
  });
});
