const getAllPosts = require('./getAllPosts');
const getPostById = require('./getPostById');
const getPostsByIdAuthor = require('./getPostsByIdAuthor');
const createPost = require('./createPost');
const deletePost = require('./deletePost');

const buildRepository = (db) => {
  const repository = {
    getAllPosts: getAllPosts(db),
    getPostById: getPostById(db),
    getPostsByIdAuthor: getPostsByIdAuthor(db),
    createPost: createPost(db),
    deletePost: deletePost(db),
  };

  return repository;
};

module.exports = buildRepository;
