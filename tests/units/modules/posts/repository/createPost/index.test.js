const createPost = require('@PostRepository/createPost');
const localDatabase = require('@PostMocks/data/localDatabase');
const basicPost = require('@PostMocks/data/posts/basicPost');

describe('[MODULES][POSTS][REPOSITORY] : create post from user id', () => {
  it('should success create an post', async () => {
    // LOCAL MOCKS
    const postDomainEntity = basicPost;

    // FUNCTION TESTED
    const postsBeforeCreation = [...localDatabase.posts];
    const createdPost = createPost()(postDomainEntity);
    const postsAfterCreation = [...localDatabase.posts];

    // EXPECTED
    const expectedCreatedPost = {
      id: 2,
      ...basicPost,
    };

    const expectedPostCreatedSchema = {
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      solution: expect.any(String),
      idAuthor: expect.any(Number),
      totalClaps: expect.any(Number),
    };

    expect(postsAfterCreation.length).toBe(postsBeforeCreation.length + 1);
    expect(createdPost).toMatchObject(expectedCreatedPost);
    expect(createdPost).toMatchObject(expectedPostCreatedSchema);
  });
});
