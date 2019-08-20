const buildMockFunction = (callback = () => {}) => (jest ? jest.fn(callback) : callback);

const buildMockPostServices = (overridenCallbacks = {}) => {
  const {
    getAllUsers: overridenGetAllPosts = () => {},
    getPostById: overridenGetPostById = () => {},
    getPostsByIdAuthor: overridenGetPostsByIdAuthor = () => {},
    createPost: overridenCreatePost = () => {},
    deletePost: overridenDeletePost = () => {},
  } = overridenCallbacks;

  const mockpostServices = {
    getAllPosts: buildMockFunction(overridenGetAllPosts),
    getPostById: buildMockFunction(overridenGetPostById),
    getPostsByIdAuthor: buildMockFunction(overridenGetPostsByIdAuthor),
    createPost: buildMockFunction(overridenCreatePost),
    deletePost: buildMockFunction(overridenDeletePost),
  };

  return mockpostServices;
};

module.exports = buildMockPostServices;
