const createPost = require('../../../../../src/modules/posts/services/createPost');
const buildMockPostRepository = require('../../../../../src/modules/posts/__mocks__/repository');
const mockBasicPost = require('../../../../../src/modules/posts/__mocks__/data/posts/basicPost');

describe('[MODULES][POSTS][SERVICES] : create post', () => {
  it('should success create new post', async () => {
    // LOCAL MOCKS
    const mockNewPostId = 1;
    const mockCreatePost = (postToCreateEntity) => ({
      id: mockNewPostId,
      ...postToCreateEntity,
    });
    const mockPostRepository = buildMockPostRepository({ createPost: mockCreatePost });
    const mockBuildPostRepository = () => (mockPostRepository);
    const postDomainEntity = mockBasicPost;

    // FUNCTION TESTED
    const postCreated = createPost(mockBuildPostRepository)(postDomainEntity);

    // EXPECTED
    const expectedPostCreated = {
      id: mockNewPostId,
      ...mockBasicPost,
    };

    const expectedPostCreateSchema = {
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      solution: expect.any(String),
      idAuthor: expect.any(Number),
      totalClaps: expect.any(Number),
    };

    // ASSERTIONS
    expect(mockPostRepository.createPost).toHaveBeenCalledTimes(1);
    expect(mockPostRepository.createPost).toBeCalledWith(mockBasicPost);
    expect(postCreated).toMatchObject(expectedPostCreateSchema);
    expect(postCreated).toMatchObject(expectedPostCreated);
  });
});
