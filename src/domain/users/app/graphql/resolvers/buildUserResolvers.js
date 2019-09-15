/**
   * APP level - Returns a list of post written by a given author id
   * @param {*} postServices
   */
const getPostsByIdAuthor = (postServices) => (parent, args) => {
  const { id: idAuthor } = parent;
  const formattedId = parseInt(idAuthor, 10);

  return postServices.getPostsByIdAuthor(formattedId);
};

/**
     * APP level - Builds User resolvers
     * @param {*} postServices
     */
function buildUsersResolvers(userServices, postServices) {
  const userResolvers = {
    postsWritten: getPostsByIdAuthor(postServices),
  };

  return userResolvers;
}

module.exports = buildUsersResolvers;
