const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const createPost = () => (postDomainEntity) => {
  const isLocalStrategy = true;
  const posts = isLocalStrategy ? localStorageStrategy(postDomainEntity) : dbStrategy();

  return posts;
};

module.exports = createPost;
