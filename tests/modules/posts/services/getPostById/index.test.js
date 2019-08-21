const getPostById = require('../../../../../src/modules/posts/services/getPostById');
const mockPosts = require('../../../../../src/modules/posts/__mocks__/data/posts/posts');
const buildMockUserRepository = require('../../../../../src/modules/posts/__mocks__/repository');

describe('[MODULES][POSTS][SERVICES] : get post by id post', () => {
  it('should success returns a post from an id', async () => {
    // LOCAL MOCKS
    const idPostToBeGet = 1;
    const mockGetPostById = (idPost) => mockPosts.find((post) => post.id === idPost);
    const mockPostRepository = buildMockUserRepository({ getPostById: mockGetPostById });
    const mockBuildPostRepository = () => (mockPostRepository);

    // FUNCTION TESTED
    const post = getPostById(mockBuildPostRepository)(idPostToBeGet);

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

    // ASSERTIONS
    expect(mockPostRepository.getPostById).toHaveBeenCalledTimes(idPostToBeGet);
    expect(mockPostRepository.getPostById).toBeCalledWith(idPostToBeGet);
    expect(post).toMatchObject(expectedPost);
    expect(post).toMatchObject(expectedPostFoundSchema);
  });
});
