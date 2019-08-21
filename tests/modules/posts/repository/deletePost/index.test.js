const deletePost = require('../../../../../src/modules/posts/repository/deletePost');
const localDatabase = require('../../../../../src/modules/posts/__mocks__/data/localDatabase');

describe('[MODULES][POSTS][REPOSITORY] : delete post from post id', () => {
  it('should success delete an post from an post id', async () => {
    // LOCAL MOCKS
    const idPost = 1;

    // FUNCTION TESTED
    const postsBeforeDeletion = localDatabase.posts;
    const isDeleted = deletePost()(idPost);
    const postsAfterDeletion = localDatabase.posts;

    // EXPECTED
    const deletedPost = localDatabase
      .posts
      .find((post) => post.id === idPost);

    expect(isDeleted).toBe(true);
    expect(deletedPost).toBeUndefined();
    expect(postsAfterDeletion.length).toBe(postsBeforeDeletion.length - 1);
    expect(postsBeforeDeletion).not.toMatchObject(postsAfterDeletion);
  });

  it('should fail delete an post from an post id', async () => {
    // LOCAL MOCKS
    const idPost = 88888888;

    // FUNCTION TESTED
    const postsBeforeDeletion = localDatabase.posts;
    const isDeleted = deletePost()(idPost);
    const postsAfterDeletion = localDatabase.posts;

    // EXPECTED
    const deletedPost = localDatabase
      .posts
      .find((post) => post.id === idPost);

    expect(isDeleted).toBe(false);
    expect(deletedPost).toBeUndefined();
    expect(postsAfterDeletion.length).toBe(postsBeforeDeletion.length);
    expect(postsBeforeDeletion).toMatchObject(postsAfterDeletion);
  });
});
