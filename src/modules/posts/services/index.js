const defaultDbServices = require('@DbService');
const defaultBuildPostRepository = require('@PostRepository');

const getAllPosts = require('./getAllPosts');
const getPostById = require('./getPostById');
const getPostsByIdAuthor = require('./getPostsByIdAuthor');
const createPost = require('./createPost');
const deletePost = require('./deletePost');

/**
 * DOMAIN level - Builds post services with dependency injection
 * @param {*} dbServices
 * @param {*} buildPostRepository
 */
function buildServices(
  dbServices = defaultDbServices,
  buildPostRepository = defaultBuildPostRepository,
) {
  const services = {
    getAllPosts: getAllPosts(buildPostRepository),
    getPostById: getPostById(buildPostRepository),
    getPostsByIdAuthor: getPostsByIdAuthor(buildPostRepository),
    createPost: createPost(buildPostRepository),
    deletePost: deletePost(buildPostRepository),
  };

  return services;
}

module.exports = buildServices;
