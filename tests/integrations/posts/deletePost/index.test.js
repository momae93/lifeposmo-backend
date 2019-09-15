const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { buildMockDatabase } = require('../../../helpers/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');

describe('[INTEGRATION][POSTS] : Delete post', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockPostRepository = buildMockPostRepository({
      deletePost: (id) => {
        mockDatabase.posts.filter((post) => post.id !== id);

        return true;
      },
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

  afterAll(async (done) => {
    // STOPPING SERVER SERVER
    await server.stop(done);
  });

  it('should success delete post when calling * deletePost *', async () => {
    // QUERY
    const idToDelete = 1;
    const DELETE_POST_REQUEST = `
      mutation {
        deletePost(
          id: ${idToDelete},
        )
      }
    `;

    const { data: deletedPost } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: DELETE_POST_REQUEST });

    expect(deletedPost).toMatchSnapshot();
  });
});
