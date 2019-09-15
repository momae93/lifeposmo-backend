const {
  buildRepository: builUserRepository,
  buildServices: buildUserServices,
} = require('@UserModule');
const {
  buildRepository: buildPostRepository,
  buildServices: buildPostServices,
} = require('@PostModule');
const dbServices = require('@DbService');

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
