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
   * APP level - Builds Post resolvers
   * @param {*} postService
   */
function buildPostsResolvers(postService, userService) {
  const postResolvers = {
    author: getUserById(userService),
  };

  return postResolvers;
}

module.exports = buildPostsResolvers;
