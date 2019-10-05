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
   * APP level - Returns a list of users that are following the given user id
   * @param {*} userServices
   */
const getFollowersByIdUser = (userServices) => (parent, args) => {
  const { id: idAuthor } = parent;
  const formattedId = parseInt(idAuthor, 10);

  return userServices.getFollowersByIdUser(formattedId);
};

/**
   * APP level - Returns a list of users that the given user id follows
   * @param {*} userServices
   */
const getFollowingByIdUser = (userServices) => (parent, args) => {
  const { id: idAuthor } = parent;
  const formattedId = parseInt(idAuthor, 10);

  return userServices.getFollowingByIdUser(formattedId);
};

/**
   * APP level - Builds User resolvers
   * @param {*} postServices
   */
function buildUsersResolvers(userServices, postServices) {
  const userResolvers = {
    postsWritten: getPostsByIdAuthor(postServices),
    followers: getFollowersByIdUser(userServices),
    following: getFollowingByIdUser(userServices),
  };

  return userResolvers;
}

module.exports = buildUsersResolvers;
