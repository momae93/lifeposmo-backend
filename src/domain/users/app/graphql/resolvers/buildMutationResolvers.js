/**
 * APP level - Creates user
 */
const createUser = (userServices) => (parent, args) => {
  const createdUser = userServices.createUser(args);

  return createdUser;
};

/**
 * APP level - Deletes user
 */
const deleteUser = (userServices) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);
  const isDeleted = userServices.deleteUser(formattedId);

  return isDeleted;
};

/**
 * APP level - Creates favorite user
 */
const followUser = (userServices) => (parent, args) => {
  const createdFavoriteUser = userServices.followUser(args);

  return createdFavoriteUser;
};

/**
 * APP level - Deletes favorite user
 */
const unfollowUser = (userServices) => (parent, args) => {
  const { id: idFavorite } = args;
  const formattedIdFavorite = parseInt(idFavorite, 10);
  const isDeleted = userServices.unfollowUser(formattedIdFavorite);

  return isDeleted;
};

/**
   * APP level - Build mutation resolvers
   * @param {*} userServices
   */
function buildMutationResolvers(userServices) {
  const mutationResolvers = {
    createUser: createUser(userServices),
    deleteUser: deleteUser(userServices),
    followUser: followUser(userServices),
    unfollowUser: unfollowUser(userServices),
  };

  return mutationResolvers;
}

module.exports = buildMutationResolvers;
