/**
 * APP level - Create user
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
   * APP level - Build mutation resolvers
   * @param {*} userServices
   */
function buildMutationResolvers(userServices) {
  const mutationResolvers = {
    createUser: createUser(userServices),
    deleteUser: deleteUser(userServices),
  };

  return mutationResolvers;
}

module.exports = buildMutationResolvers;
