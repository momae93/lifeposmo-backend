const defaultPostUserRepository = require('@PostRepository');

/**
  * DOMAIN level - Gets single post by id
  * @param {*} buildPostRepository
  */
const getPostById = (
  buildPostRepository = defaultPostUserRepository,
) => (id) => {
  const repository = buildPostRepository();
  const post = repository.getPostById(id);

  return post;
};

module.exports = getPostById;
