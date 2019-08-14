/**
   * APP level - Returns a list of post written by a given author id
   * @param {*} postService
   */
const getPostsByIdAuthor = (postService) => (parent, args) => {
  const { id: idAuthor } = parent;
  const formattedId = parseInt(idAuthor, 10);

  return postService.getPostsByIdAuthor(formattedId);
};

/**
     * APP level - Builds User resolvers
     * @param {*} postService
     */
function buildUsersResolvers(userService, postService) {
  const userResolvers = {
    postsWritten: getPostsByIdAuthor(postService),
  };

  return userResolvers;
}

module.exports = buildUsersResolvers;
