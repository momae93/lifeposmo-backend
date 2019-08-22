const axios = require('axios');

const { buildMockDatabase } = require('../../../helpers/');
const { buildGraphqlServer } = require('../../../../src/bin/servers/index');
const { buildServices: buildUserServices } = require('../../../../src/modules/users');
const { buildServices: buildPostServices } = require('../../../../src/modules/posts');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');
const basicFavoriteUser = require('../../../../src/modules/users/__mocks__/data/favoriteUsers/basicFavoriteUser');
const buildMockUserRepository = require('../../../../src/modules/users/__mocks__/repository');
const buildMockPostRepository = require('../../../../src/modules/posts/__mocks__/repository');

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
