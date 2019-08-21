const buildMockFunction = (callback = () => {}) => (jest ? jest.fn(callback) : callback);

const buildMockUserServices = (overridenCallbacks = {}) => {
  const {
    getAllUsers: overridenGetAllUsers = () => {},
    getUserById: overridenGetUserById = () => {},
    deleteUser: overridenDeleteUser = () => {},
    createUser: overridenCreateUser = () => {},
    followUser: overridenFollowUser = () => {},
    unfollowUser: overridenUnfollowUser = () => {},
  } = overridenCallbacks;

  const mockUserServices = {
    getAllUsers: buildMockFunction(overridenGetAllUsers),
    getUserById: buildMockFunction(overridenGetUserById),
    deleteUser: buildMockFunction(overridenDeleteUser),
    createUser: buildMockFunction(overridenCreateUser),
    followUser: buildMockFunction(overridenFollowUser),
    unfollowUser: buildMockFunction(overridenUnfollowUser),
  };

  return mockUserServices;
};

module.exports = buildMockUserServices;
