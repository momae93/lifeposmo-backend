const createPostLocalStorage = require('../../../../../src/modules/posts/repository/createPost/localStorage');
const localDatabase = require('../../../../../src/modules/posts/__mocks__/data/localDatabase');
const basicPost = require('../../../../../src/modules/posts/__mocks__/data/posts/basicPost');

describe('[MODULES][POSTS][REPOSITORY][LOCAL STORAGE] : create post from user id', () => {
  it('should success create an post from local storagez', async () => {
    // LOCAL MOCKS
    const postDomainEntity = basicPost;

    // FUNCTION TESTED
    const postsBeforeCreation = [...localDatabase.posts];
    const createdPost = createPostLocalStorage(postDomainEntity);
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
