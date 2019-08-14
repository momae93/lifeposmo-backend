const defaultBuildPostRepository = require('../../repository');

function appToDomainEntity(postAppEntity) {
  const {
    title,
    description,
    solution,
    idAuthor,
  } = postAppEntity;

  const postDomainEntity = {
    title,
    description,
    solution,
    idAuthor,
  };

  return postDomainEntity;
}

/**
 * DOMAIN level - Creates a post
 * @param {*} buildPostRepository
 */
const createPost = (
  buildPostRepository = defaultBuildPostRepository,
) => (postAppEntity) => {
  const repository = buildPostRepository();
  const postDomainEntity = appToDomainEntity(postAppEntity);

  return repository.createPost(postDomainEntity);
};

module.exports = createPost;
