const {
  buildRepository: builUserRepository,
  buildServices: buildUserServices,
} = require('../../modules/users');
const {
  buildRepository: buildPostRepository,
  buildServices: buildPostServices,
} = require('../../modules/posts');
const dbServices = require('../../lib/dbServices');

/**
 * Build services through dependency injection
 */
const userServices = buildUserServices(dbServices, builUserRepository);
const postServices = buildPostServices(dbServices, buildPostRepository);
const services = {
  userServices,
  postServices,
};

module.exports = services;
