const buildMockFunction = (callback = () => {}) => (jest ? jest.fn(callback) : callback);

const buildMockPostServices = (overridenCallbacks = {}) => {
  const {
    getAllPosts: overridenGetAllPosts = () => {},
    getPostById: overridenGetPostById = () => {},
    getPostsByIdAuthor: overridenGetPostsByIdAuthor = () => {},
    createPost: overridenCreatePost = () => {},
    deletePost: overridenDeletePost = () => {},
  } = overridenCallbacks;

  const mockPostServices = {
    getAllPosts: buildMockFunction(overridenGetAllPosts),
    getPostById: buildMockFunction(overridenGetPostById),
    getPostsByIdAuthor: buildMockFunction(overridenGetPostsByIdAuthor),
    createPost: buildMockFunction(overridenCreatePost),
    deletePost: buildMockFunction(overridenDeletePost),
  };

  return mockPostServices;
};

module.exports = buildMockPostServices;
