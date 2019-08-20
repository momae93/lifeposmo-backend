/**
 * APP level - Creates post
 */
const createPost = (postServices) => (parent, args) => {
  const createdPost = postServices.createUser(args);

  return createdPost;
};

/**
 * APP level - Deletes post
 */
const deletePost = (postServices) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);
  const isDeleted = postServices.deletePost(formattedId);

  return isDeleted;
};


/**
   * APP level - Build mutation resolvers
   * @param {*} postServices
   */
function buildMutationResolvers(postServices) {
  const mutationResolvers = {
    createPost: createPost(postServices),
    deletePost: deletePost(postServices),
  };

  return mutationResolvers;
}

module.exports = buildMutationResolvers;
