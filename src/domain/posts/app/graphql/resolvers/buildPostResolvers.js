/**
   * APP level - Returns an author given an id user
   * @param {*} postServices
   */
const getUserById = (userServices) => (parent, args) => {
  const { idAuthor } = parent;
  const formattedId = parseInt(idAuthor, 10);

  return userServices.getUserById(formattedId);
};

/**
   * APP level - Builds Post resolvers
   * @param {*} postServices
   */
function buildPostsResolvers(postServices, userServices) {
  const postResolvers = {
    author: getUserById(userServices),
  };

  return postResolvers;
}

module.exports = buildPostsResolvers;
