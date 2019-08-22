const buildMockFunction = (callback) => (jest ? jest.fn(callback) : callback);

const buildMockUserRepository = (overridenCallbacks = {}) => {
  const {
    getAllUsers: overridenGetAllUsers = () => {},
    getUserById: overridenGetUserById = () => {},
    getFollowersByIdUser: overridenGetFollowersByIdUser = () => {},
    getFollowingByIdUser: overridenGetFollowingByIdUser = () => {},
    deleteUser: overridenDeleteUser = () => {},
    createUser: overridenCreateUser = () => {},
    createFavoriteUser: overridenCreateFavoriteUser = () => {},
    deleteFavoriteUser: overridenDeleteFavoriteUser = () => {},
  } = overridenCallbacks;

  const mockUserRepository = {
    getAllUsers: buildMockFunction(overridenGetAllUsers),
    getUserById: buildMockFunction(overridenGetUserById),
    getFollowersByIdUser: buildMockFunction(overridenGetFollowersByIdUser),
    getFollowingByIdUser: buildMockFunction(overridenGetFollowingByIdUser),
    deleteUser: buildMockFunction(overridenDeleteUser),
    createUser: buildMockFunction(overridenCreateUser),
    createFavoriteUser: buildMockFunction(overridenCreateFavoriteUser),
    deleteFavoriteUser: buildMockFunction(overridenDeleteFavoriteUser),
  };

  return mockUserRepository;
};

module.exports = buildMockUserRepository;
