const defaultBuildPostRepository = require('../../repository');

/**
 * DOMAIN level - Gets all posts from repository
 * @param {*} buildPostRepository
 */
const getAllPosts = (
  buildPostRepository = defaultBuildPostRepository,
) => () => {
  const repository = buildPostRepository();
  const posts = repository.getAllPosts();

  return posts;
};

module.exports = getAllPosts;
