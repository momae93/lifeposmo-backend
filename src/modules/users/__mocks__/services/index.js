const buildMockFunction = (callback = () => {}) => (jest ? jest.fn(callback) : callback);

const buildMockUserServices = (overridenCallbacks = {}) => {
  const {
    getAllUsers: overridenGetAllUsers = () => {},
    getUserById: overridenGetUserById = () => {},
    deleteUser: overridenDeleteUser = () => {},
    createUser: overridenCreateUser = () => {},
  } = overridenCallbacks;

  const mockUserRepository = {
    getAllUsers: buildMockFunction(overridenGetAllUsers),
    getUserById: buildMockFunction(overridenGetUserById),
    deleteUser: buildMockFunction(overridenDeleteUser),
    createUser: buildMockFunction(overridenCreateUser),
  };

  return mockUserRepository;
};

module.exports = buildMockUserServices;
