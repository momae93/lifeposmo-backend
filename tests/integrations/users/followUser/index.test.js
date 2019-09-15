const axios = require('axios');

const { buildGraphqlServer } = require('@Bin/servers/');
const basicFavoriteUser = require('@UserMocks/data/favoriteUsers/basicFavoriteUser');
const buildMockUserRepository = require('@UserMocks/repository');
const buildMockPostRepository = require('@PostMocks/repository');
const { buildServices: buildUserServices } = require('@UserModule/');
const { buildServices: buildPostServices } = require('@PostModule/');
const { buildMockDatabase } = require('../../../helpers/');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');

describe('[INTEGRATION][USERS] : Follow user', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockUserRepository = buildMockUserRepository({
      createFavoriteUser: (favoriteUserEntity) => {
        const maxId = Math.max(...mockDatabase
          .favoriteUsers
          .map((favoriteUser) => favoriteUser.id)) || 0;

        const newId = maxId + 1;
        const createdFavoriteUser = {
          id: newId,
          ...favoriteUserEntity,
        };
        mockDatabase.favoriteUsers.push({ id: newId, ...favoriteUserEntity });

        return createdFavoriteUser;
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

  it('should success follow user and get all fields when calling * followUser *', async () => {
    // QUERY
    const FOLLOW_USER_REQUEST = `
      mutation {
        followUser(
          idUser: "${basicFavoriteUser.idUser}",
          idFavoriteUser: "${basicFavoriteUser.idFavoriteUser}",
        ) {
            id
        }
      }
    `;

    const { data: createdFavoriteUser } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: FOLLOW_USER_REQUEST });

    expect(createdFavoriteUser).toMatchSnapshot();
  });
});
