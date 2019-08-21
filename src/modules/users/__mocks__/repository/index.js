const buildMockFunction = (callback) => (jest ? jest.fn(callback) : callback);

const buildMockUserRepository = (overridenCallbacks = {}) => {
  const {
    getAllUsers: overridenGetAllUsers = () => {},
    getUserById: overridenGetUserById = () => {},
    deleteUser: overridenDeleteUser = () => {},
    createUser: overridenCreateUser = () => {},
    createFavoriteUser: overridenCreateFavoriteUser = () => {},
    deleteFavoriteUser: overridenDeleteFavoriteUser = () => {},
  } = overridenCallbacks;

  const mockUserRepository = {
    getAllUsers: buildMockFunction(overridenGetAllUsers),
    getUserById: buildMockFunction(overridenGetUserById),
    deleteUser: buildMockFunction(overridenDeleteUser),
    createUser: buildMockFunction(overridenCreateUser),
    createFavoriteUser: buildMockFunction(overridenCreateFavoriteUser),
    deleteFavoriteUser: buildMockFunction(overridenDeleteFavoriteUser),
  };

  return mockUserRepository;
};

module.exports = buildMockUserRepository;
