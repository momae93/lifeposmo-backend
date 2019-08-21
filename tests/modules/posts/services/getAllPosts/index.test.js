const getAllPosts = require('../../../../../src/modules/posts/services/getAllPosts');
const mockPosts = require('../../../../../src/modules/posts/__mocks__/data/posts/posts');
const buildMockPostRepository = require('../../../../../src/modules/posts/__mocks__/repository');

describe('[MODULES][POSTS][SERVICES] : get all posts', () => {
  it('should success get all posts', async () => {
    // LOCAL MOCKS
    const mockGetAllPosts = () => (mockPosts);
    const mockPostsRepository = buildMockPostRepository({ getAllPosts: mockGetAllPosts });
    const mockBuildPostRepository = () => (mockPostsRepository);

    // FUNCTION TESTED
    const posts = getAllPosts(mockBuildPostRepository)();

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

    // ASSERTIONS
    expect(mockPostsRepository.getAllPosts).toHaveBeenCalledTimes(1);
    expect(posts).toMatchObject(expectedPosts);
    expect(posts).toContainEqual(expect.objectContaining(expectedPostSchema));
  });
});
