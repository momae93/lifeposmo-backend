/**
 * APP level - Create user
 */
const createUser = (userService) => (parent, args) => {
  const createdUser = userService.createUser(args);

  return createdUser;
};

/**
 * APP level - Deletes user
 */
const deleteUser = (userService) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);
  const isDeleted = userService.deleteUser(formattedId);

  return isDeleted;
};


/**
   * APP level - Build mutation resolvers
   * @param {*} userService
   */
function buildMutationResolvers(userService) {
  const mutationResolvers = {
    createUser: createUser(userService),
    deleteUser: deleteUser(userService),
  };

  return mutationResolvers;
}

module.exports = buildMutationResolvers;
