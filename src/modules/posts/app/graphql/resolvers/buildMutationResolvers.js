/**
 * APP level - Creates post
 */
const createPost = (postService) => (parent, args) => {
  const createdPost = postService.createUser(args);

  return createdPost;
};

/**
 * APP level - Deletes post
 */
const deletePost = (postService) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);
  const isDeleted = postService.deletePost(formattedId);

  return isDeleted;
};


/**
   * APP level - Build mutation resolvers
   * @param {*} postService
   */
function buildMutationResolvers(postService) {
  const mutationResolvers = {
    createPost: createPost(postService),
    deletePost: deletePost(postService),
  };

  return mutationResolvers;
}

module.exports = buildMutationResolvers;
