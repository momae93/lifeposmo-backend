const defaultDbServices = require('../../../lib/dbServices');
const getAllUsers = require('./getAllUsers');
const defaultBuildUserRepository = require('../repository/');

/**
 * DOMAIN level - Build user services with dependency injection
 * @param {*} dbServices
 * @param {*} buildUserRepository
 */
function buildServices(
  dbServices = defaultDbServices,
  buildUserRepository = defaultBuildUserRepository,
) {
  const services = {
    getAllUsers: getAllUsers(buildUserRepository),
  };

  return services;
}

module.exports = buildServices;
