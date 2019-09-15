const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildMockDatabase } = require('../../../helpers/');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');

describe('[INTEGRATION][USERS] : Delete user', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockUserRepository = buildMockUserRepository({
      deleteUser: (id) => {
        mockDatabase.users.filter((user) => user.id !== id);

        return true;
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

  it('should success delete user when calling * deleteUser *', async () => {
    // QUERY
    const idToDelete = 1;
    const DELETE_USER_REQUEST = `
      mutation {
        deleteUser(
          id: ${idToDelete},
        )
      }
    `;

    const { data: deletedUser } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: DELETE_USER_REQUEST });

    expect(deletedUser).toMatchSnapshot();
  });
});
