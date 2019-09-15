const getPostById = require('@PostRepository/getPostById');
const mockPosts = require('@PostMocks/data/posts/posts');

describe('[MODULES][POSTS][REPOSITORY] : get by post id', () => {
  it('should get a pots given a post id', async () => {
    // LOCAL MOCKS
    const idPost = 1;

    // FUNCTION TESTED
    const foundPost = getPostById()(idPost);

    // EXPECTED
    const expectedPost = mockPosts.find((post) => post.id === idPost);

    expect(foundPost).toMatchObject(expectedPost);
  });
});
