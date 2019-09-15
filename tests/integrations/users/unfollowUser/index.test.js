const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { buildMockDatabase } = require('../../../helpers/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');

describe('[INTEGRATION][USERS] : Unfollow user', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockUserRepository = buildMockUserRepository({
      deleteFavoriteUser: (id) => {
        mockDatabase.favoriteUsers.filter((favoriteUser) => favoriteUser.id !== id);

        return true;
      },
    });
    const mockPostRepository = buildMockPostRepository();
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

  it('should success unfollow user when calling * unfollowUser *', async () => {
    // QUERY
    const idToDelete = 1;
    const UNFOLLOW_USER_REQUEST = `
      mutation {
        unfollowUser(
          idFavorite: ${idToDelete},
        )
      }
    `;

    const { data: deletedUser } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: UNFOLLOW_USER_REQUEST });

    expect(deletedUser).toMatchSnapshot();
  });
});
