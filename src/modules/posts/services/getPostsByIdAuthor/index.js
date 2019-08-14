const defaultPostUserRepository = require('../../repository');

/**
  * DOMAIN level - Gets post list that has been written by the given author id
  * @param {*} buildPostRepository
  */
const getPostsByIdAuthor = (
  buildPostRepository = defaultPostUserRepository,
) => (id) => {
  const repository = buildPostRepository();
  const postList = repository.getPostsByIdAuthor(id);

  return postList;
};

module.exports = getPostsByIdAuthor;
