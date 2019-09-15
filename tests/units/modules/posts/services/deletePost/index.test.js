const deletePost = require('@PostService/deletePost');
const buildMockUserRepository = require('@PostMocks/repository');

describe('[MODULES][POSTS][SERVICES] : delete post', () => {
  it('should success delete new post', async () => {
    // LOCAL MOCKS
    const deleteSucessed = true;
    const idPostToBeDeleted = 1;
    const mockDeletePost = (idPost) => {
      // Silly mocking of the behavior to ensure an idUser is passed to test
      if (idPost) {
        return deleteSucessed;
      }
      return false;
    };
    const mockPostRepository = buildMockUserRepository({ deletePost: mockDeletePost });
    const mockBuildPostRepository = () => (mockPostRepository);

    // FUNCTION TESTED
    const isPostDeleted = deletePost(mockBuildPostRepository)(idPostToBeDeleted);

    // EXPECTED
    const expectedPostDeleted = true;

    // ASSERTIONS
    expect(mockPostRepository.deletePost).toHaveBeenCalledTimes(1);
    expect(mockPostRepository.deletePost).toBeCalledWith(idPostToBeDeleted);
    expect(isPostDeleted).toBe(expectedPostDeleted);
  });
});
