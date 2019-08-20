/**
 * APP level - Returns list of users
 */
const getAllUsers = (userServices) => () => {
  const users = userServices.getAllUsers();

  return users;
};

/**
 * APP level - Returns a user given an id
 * @param {*} userServices
 */
const getUserById = (userServices) => (parent, args) => {
  const { id } = args;
  const formattedId = parseInt(id, 10);

  return userServices.getUserById(formattedId);
};

/**
 * APP level - Build query resolvers
 * @param {*} userServices
 */
function buildQueryResolvers(userServices) {
  const queryResolvers = {
    users: getAllUsers(userServices),
    user: getUserById(userServices),
  };

  return queryResolvers;
}

module.exports = buildQueryResolvers;
