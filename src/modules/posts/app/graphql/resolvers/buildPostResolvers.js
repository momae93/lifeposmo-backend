/**
   * APP level - Returns an author given an id user
   * @param {*} postService
   */
const getUserById = (userService) => (parent, args) => {
  const { idAuthor } = parent;
  const formattedId = parseInt(idAuthor, 10);

  return userService.getUserById(formattedId);
};

/**
   * APP level - Builds query resolvers
   * @param {*} postService
   */
function buildPostsResolvers(postService, userService) {
  const queryResolvers = {
    author: getUserById(userService),
  };

  return queryResolvers;
}

module.exports = buildPostsResolvers;
