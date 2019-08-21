const axios = require('axios');

const { buildMockDatabase } = require('../../../helpers/');
const { buildGraphqlServer } = require('../../../../src/bin/servers/index');
const { buildServices: buildUserServices } = require('../../../../src/modules/users');
const { buildServices: buildPostServices } = require('../../../../src/modules/posts');
const { URL_GRAPHQL_API_TEST_INTEGRATION } = require('../../constants');
const basicPost = require('../../../../src/modules/posts/__mocks__/data/posts/basicPost');
const buildMockUserRepository = require('../../../../src/modules/users/__mocks__/repository');
const buildMockPostRepository = require('../../../../src/modules/posts/__mocks__/repository');

describe('[INTEGRATION][POSTS] : Create post', () => {
  let server = null;
  let mockDatabase = null;

  beforeAll(async () => {
    // LOCAL MOCKS
    const mockDbServices = {};
    const mockPostRepository = buildMockPostRepository({
      createPost: (postEntity) => {
        const maxId = Math.max(...mockDatabase
          .posts
          .map((post) => post.id)) || 0;

        const newId = maxId + 1;
        const createdPost = {
          id: newId,
          ...postEntity,
        };
        mockDatabase.posts.push({ id: maxId, ...postEntity });

        return createdPost;
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

  it('should success create post and get all fields when calling * createPost *', async () => {
    // QUERY
    const CREATE_POST_REQUEST = `
      mutation {
        createPost(
          title: "${basicPost.title}",
          description: "${basicPost.description}"
          solution: "${basicPost.solution}"
          idAuthor: ${basicPost.idAuthor}
        ) {
            id
            title
            description
            solution
            idAuthor
            totalClaps
        }
      }
    `;

    const { data: createPost } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: CREATE_POST_REQUEST });

    expect(createPost).toMatchSnapshot();
  });

  it('should success create post and get all fields and author when calling * createPost *', async () => {
    // QUERY
    const CREATE_POST_REQUEST = `
      mutation {
        createPost(
          title: "${basicPost.title}",
          description: "${basicPost.description}"
          solution: "${basicPost.solution}"
          idAuthor: ${basicPost.idAuthor}
        ) {
            id
            title
            description
            solution
            idAuthor
            totalClaps
            author {
              firstname
              lastname
              description
              username
              password
              isMale
              birthdate
            }
        }
      }
    `;

    const { data: createPost } = await axios
      .post(URL_GRAPHQL_API_TEST_INTEGRATION, { query: CREATE_POST_REQUEST });

    expect(createPost).toMatchSnapshot();
  });
});
