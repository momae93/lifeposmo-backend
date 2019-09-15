const defaultBuildUserRepository = require('@UserRepository');

/**
 * DOMAIN level - Deletes a post given a post id
 * @param {*} buildPostRepository
 */
const deletePost = (
  buildUserRepository = defaultBuildUserRepository,
) => (id) => {
  const repository = buildUserRepository();

  return repository.deletePost(id);
};

module.exports = deletePost;
