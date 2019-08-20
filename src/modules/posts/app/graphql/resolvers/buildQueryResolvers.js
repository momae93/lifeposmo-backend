/**
 * APP level - Returns list of posts
 */
const getAllPosts = (postServices) => () => {
  const posts = postServices.getAllPosts();

  return posts;
};

/**
 * APP level - Returns a post given an id
 * @param {*} postServices
 */
const getPostById = (postServices) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);

  return postServices.getPostById(formattedId);
};

/**
 * APP level - Returns a list of post given an author id
 * @param {*} postServices
 */
const getPostsByIdAuthor = (postServices) => (parent, args) => {
  const { idAuthor } = args;
  const formattedIdAuthor = parseInt(idAuthor, 10);

  return postServices.getPostsByIdAuthor(formattedIdAuthor);
};

/**
 * APP level - Build query resolvers
 * @param {*} postServices
 */
function buildQueryResolvers(postServices) {
  const queryResolvers = {
    posts: getAllPosts(postServices),
    post: getPostById(postServices),
    postsWrittenBy: getPostsByIdAuthor(postServices),
  };

  return queryResolvers;
}

module.exports = buildQueryResolvers;
