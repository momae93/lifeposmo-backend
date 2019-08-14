const getAllPosts = require('./getAllPosts');
const getPostById = require('./getPostById');
const createPost = require('./createPost');
const deletePost = require('./deletePost');

const buildRepository = (db) => {
  const repository = {
    getAllPosts: getAllPosts(db),
    getPostById: getPostById(db),
    createPost: createPost(db),
    deletePost: deletePost(db),
  };

  return repository;
};

module.exports = buildRepository;
