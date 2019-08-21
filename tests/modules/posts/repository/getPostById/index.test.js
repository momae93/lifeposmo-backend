const getPostById = require('../../../../../src/modules/posts/repository/getPostById');
const mockPosts = require('../../../../../src/modules/posts/__mocks__/data/posts/posts');

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
