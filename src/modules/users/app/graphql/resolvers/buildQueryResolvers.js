/**
 * APP level - Returns list of users
 */
const getAllUsers = (userService) => () => {
  const users = userService.getAllUsers();

  return users;
};

/**
 * APP level - Returns a user given an id
 * @param {*} userService
 */
const getUserById = (userService) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);

  return userService.getUserById(formattedId);
};

/**
 * APP level - Build query resolvers
 * @param {*} userService
 */
function buildQueryResolvers(userService) {
  const queryResolvers = {
    users: getAllUsers(userService),
    user: getUserById(userService),
  };

  return queryResolvers;
}

module.exports = buildQueryResolvers;
