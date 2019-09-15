const deletePostLocalStorage = require('@PostRepository/deletePost/localStorage');
const localDatabase = require('@PostMocks/data/localDatabase');

describe('[MODULES][POSTS][REPOSITORY][LOCAL STORAGE] : delete post from post id', () => {
  it('should success delete a post from an post id from local storage', async () => {
    // LOCAL MOCKS
    const idPost = 1;

    // FUNCTION TESTED
    const postsBeforeDeletion = localDatabase.posts;
    const isDeleted = deletePostLocalStorage(idPost);
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

  it('should fail delete an user from an user id from local storage', async () => {
    // LOCAL MOCKS
    const idPost = 88888888;

    // FUNCTION TESTED
    const postsBeforeDeletion = localDatabase.posts;
    const isDeleted = deletePostLocalStorage(idPost);
    const postsAfterDeletion = localDatabase.posts;

    // EXPECTED
    const deletePost = localDatabase
      .posts
      .find((user) => user.id === idPost);

    expect(isDeleted).toBe(false);
    expect(deletePost).toBeUndefined();
    expect(postsBeforeDeletion.length).toBe(postsAfterDeletion.length);
    expect(postsAfterDeletion).toMatchObject(postsBeforeDeletion);
  });
});
