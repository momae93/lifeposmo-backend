const getPostsByIdAuthor = require('@PostService/getPostsByIdAuthor');
const mockPosts = require('@PostMocks/data/posts/posts');
const buildMockUserRepository = require('@PostMocks/repository');

describe('[MODULES][POSTS][SERVICES] : get posts written given a idAuthor', () => {
  it('should success returns a list of post written from an id author', async () => {
    // LOCAL MOCKS
    const idAuthor = 1;
    const mockGetPostsByIdAuthor = (id) => mockPosts
      .filter((post) => post.idAuthor === id);
    const mockPostRepository = buildMockUserRepository(
      { getPostsByIdAuthor: mockGetPostsByIdAuthor },
    );
    const mockBuildPostRepository = () => (mockPostRepository);

    // FUNCTION TESTED
    const postsWritten = getPostsByIdAuthor(mockBuildPostRepository)(idAuthor);

    // EXPECTED
    const expectedPostsWritten = [{
      id: 1,
      title: 'This is the title',
      description: 'This a description',
      solution: 'This is a solution',
      idAuthor: 1,
      totalClaps: 0,
    }];

    const expectedPostWrittenSchema = {
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      solution: expect.any(String),
      idAuthor: expect.any(Number),
      totalClaps: expect.any(Number),
    };

    // ASSERTIONS
    expect(mockPostRepository.getPostsByIdAuthor).toHaveBeenCalledTimes(idAuthor);
    expect(mockPostRepository.getPostsByIdAuthor).toBeCalledWith(idAuthor);
    expect(postsWritten).toMatchObject(expectedPostsWritten);
    expect(postsWritten).toContainEqual(expect.objectContaining(expectedPostWrittenSchema));
  });
});
