/**
 * APP level - Returns list of posts
 */
const getAllPosts = (postService) => () => {
  const posts = postService.getAllPosts();

  return posts;
};

/**
 * APP level - Returns a post given an id
 * @param {*} postService
 */
const getPostById = (postService) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);

  return postService.getPostById(formattedId);
};

/**
 * APP level - Returns a list of post given an author id
 * @param {*} postService
 */
const getPostsByIdAuthor = (postService) => (parent, args) => {
  const { idAuthor } = args;
  const formattedIdAuthor = parseInt(idAuthor, 10);

  return postService.getPostsByIdAuthor(formattedIdAuthor);
};

/**
 * APP level - Build query resolvers
 * @param {*} postService
 */
function buildQueryResolvers(postService) {
  const queryResolvers = {
    posts: getAllPosts(postService),
    post: getPostById(postService),
    postsWrittenBy: getPostsByIdAuthor(postService),
  };

  return queryResolvers;
}

module.exports = buildQueryResolvers;
