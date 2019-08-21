const buildResolvers = require('../../../../../../src/modules/posts/app/graphql/resolvers/');
const buildMockUserServices = require('../../../../../../src/modules/users/__mocks__/services/');
const buildMockPostServices = require('../../../../../../src/modules/posts/__mocks__/services/');
const buildMockUsers = require('../../../../../../src/modules/users/__mocks__/data/users/buildMockUsers');
const mockBasicPost = require('../../../../../../src/modules/posts/__mocks__/data/posts/basicPost');
const mockPosts = require('../../../../../../src/modules/posts/__mocks__/data/posts/posts');

describe('[MODULES][POSTS][APP][GRAPHQL - RESOLVERS] : buildResolvers', () => {
  it('should build resolvers', async () => {
    // LOCAL MOCKS
    const mockPostServices = buildMockPostServices();
    const mockUserServices = buildMockUserServices();

    // FUNCTION TESTED
    const userResolvers = buildResolvers(mockUserServices, mockPostServices);

    // EXPECTED
    const expectedPostResolvers = {
      Mutation: expect.any(Object),
      Query: expect.any(Object),
      Post: expect.any(Object),
    };

    expect(userResolvers).toMatchObject(expectedPostResolvers);
  });
});

describe('[MODULES][POSTS][APP][GRAPHQL - RESOLVERS] : Query resolvers', () => {
  it('should success call * posts *', () => {
    // LOCAL MOCKS
    const mockGetAllPosts = () => (mockPosts);
    const mockPostServices = buildMockPostServices({ getAllPosts: mockGetAllPosts });
    const mockUserServices = buildMockUserServices();
    const postResolvers = buildResolvers(mockPostServices, mockUserServices);

    // FUNCTION TESTED
    const posts = postResolvers.Query.posts();

    // EXPECTED
    const expectedPosts = mockPosts;
    const expectedPostSchema = {
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      solution: expect.any(String),
      idAuthor: expect.any(Number),
      totalClaps: expect.any(Number),
    };

    expect(mockPostServices.getAllPosts).toHaveBeenCalledTimes(1);
    expect(posts).toMatchObject(expectedPosts);
    expect(posts).toContainEqual(expect.objectContaining(expectedPostSchema));
  });

  it('should success call * post *', () => {
    // LOCAL MOCKS
    const idPost = 1;
    const mockGetPostById = (id) => mockPosts.find((post) => post.id === id);
    const mockPostServices = buildMockPostServices({ getPostById: mockGetPostById });
    const mockUserServices = buildMockUserServices();
    const postResolvers = buildResolvers(mockPostServices, mockUserServices);
    const queryArguments = { id: idPost };

    // FUNCTION TESTED
    const post = postResolvers.Query.post(null, queryArguments);

    // EXPECTED
    const expectedPost = {
      id: 1,
      title: 'This is the title',
      description: 'This a description',
      solution: 'This is a solution',
      idAuthor: 1,
      totalClaps: 0,
    };

    const expectedPostFoundSchema = {
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      solution: expect.any(String),
      idAuthor: expect.any(Number),
      totalClaps: expect.any(Number),
    };

    expect(mockPostServices.getPostById).toHaveBeenCalledTimes(1);
    expect(mockPostServices.getPostById).toHaveBeenCalledWith(idPost);
    expect(post).toMatchObject(expectedPost);
    expect(post).toMatchObject(expectedPostFoundSchema);
  });
});

describe('[MODULES][POSTS][APP][GRAPHQL - RESOLVERS] : Mutation resolvers', () => {
  it('should success call * createPost *', () => {
    // LOCAL MOCKS
    const mockNewPostId = 1;
    const mockCreatePost = (postToCreateEntity) => ({
      id: mockNewPostId,
      ...postToCreateEntity,
    });
    const mockPostServices = buildMockPostServices({ createPost: mockCreatePost });
    const mockUserServices = buildMockUserServices();
    const postResolvers = buildResolvers(mockPostServices, mockUserServices);
    const queryArguments = mockBasicPost;

    // FUNCTION TESTED
    const postCreated = postResolvers.Mutation.createPost(null, queryArguments);

    // EXPECTED
    const expectedPostCreated = {
      id: mockNewPostId,
      ...mockBasicPost,
    };

    const expectedPostCreatedSchema = {
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      solution: expect.any(String),
      idAuthor: expect.any(Number),
      totalClaps: expect.any(Number),
    };

    expect(mockPostServices.createPost).toHaveBeenCalledTimes(1);
    expect(mockPostServices.createPost).toHaveBeenCalledWith(mockBasicPost);
    expect(postCreated).toMatchObject(expectedPostCreatedSchema);
    expect(postCreated).toMatchObject(expectedPostCreated);
  });

  it('should success call * deletePost *', () => {
    // LOCAL MOCKS
    const deleteSucessed = true;
    const idPostToBeDeleted = 1;
    const mockDeletePost = (idPost) => {
      // Silly mocking of the behavior to ensure an idPost is passed to test
      if (idPost) {
        return deleteSucessed;
      }
      return false;
    };
    const mockPostServices = buildMockPostServices({ deletePost: mockDeletePost });
    const mockUserServices = buildMockUserServices();
    const postsResolvers = buildResolvers(mockPostServices, mockUserServices);
    const queryArguments = {
      id: idPostToBeDeleted,
    };

    // FUNCTION TESTED
    const isPostDeleted = postsResolvers.Mutation.deletePost(null, queryArguments);

    // EXPECTED
    const expectedPostDeleted = true;

    expect(mockPostServices.deletePost).toHaveBeenCalledTimes(1);
    expect(mockPostServices.deletePost).toHaveBeenCalledWith(idPostToBeDeleted);
    expect(isPostDeleted).toBe(expectedPostDeleted);
  });
});

describe('[MODULES][POSTS][APP][GRAPHQL - RESOLVERS] : Post resolvers', () => {
  it('should success call * author *', () => {
    // LOCAL MOCKS
    const idAuthor = 1;
    const mockUsers = buildMockUsers();
    const mockGetUserById = (id) => (
      mockUsers.find((user) => user.id === id)
    );
    const mockPostServices = buildMockPostServices();
    const mockUserServices = buildMockUserServices({ getUserById: mockGetUserById });
    const postResolvers = buildResolvers(mockPostServices, mockUserServices);
    const parentArguments = {
      idAuthor,
    };

    // FUNCTION TESTED
    const author = postResolvers.Post.author(parentArguments, null);

    // EXPECTED SCHEMA

    const expectedUserSchema = {
      id: expect.any(Number),
      firstname: expect.any(String),
      lastname: expect.any(String),
      username: expect.any(String),
      description: expect.any(String),
      birthdate: expect.any(Date),
      password: expect.any(String),
      isMale: expect.any(Boolean),
    };

    expect(mockUserServices.getUserById).toHaveBeenCalledTimes(1);
    expect(mockUserServices.getUserById).toHaveBeenCalledWith(idAuthor);
    expect(author).toMatchObject(expectedUserSchema);
  });
});
