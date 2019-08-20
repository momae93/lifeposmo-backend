const { localDatabase } = require('../../__mocks__/data/');

function generateIdFromList() {
  const postIdList = localDatabase
    .posts
    .map((post) => post.id);

  const newId = postIdList.length === 0 ? 1 : Math.max(...postIdList) + 1;

  return newId;
}

function domainToDataEntity(postDomainEntity) {
  const {
    title,
    description,
    solution,
    idAuthor,
  } = postDomainEntity;

  const newIdPost = generateIdFromList();
  const postDataEntity = {
    id: newIdPost,
    title,
    description,
    solution,
    idAuthor,
    totalClaps: 0,
  };

  return postDataEntity;
}

function createPost(postDomainEntity) {
  const postDataEntity = domainToDataEntity(postDomainEntity);
  localDatabase
    .posts
    .push(postDataEntity);

  return postDataEntity;
}

module.exports = createPost;
