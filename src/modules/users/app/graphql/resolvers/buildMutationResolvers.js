/**
 * APP level - Create user
 */
const createUser = (userService) => (parent, args) => {
  const createdUser = userService.createUser(args);

  return createdUser;
};

/**
   * APP level - Build mutation resolvers
   * @param {*} userService
   */
function buildMutationResolvers(userService) {
  const mutationResolvers = {
    createUser: createUser(userService),
  };

  return mutationResolvers;
}

module.exports = buildMutationResolvers;
