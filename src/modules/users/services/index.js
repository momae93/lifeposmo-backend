const defaultDbServices = require('../../../lib/dbServices');
const defaultBuildUserRepository = require('../repository/');

const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const createUser = require('./createUser');
const deleteUser = require('./deleteUser');
const followUser = require('./followUser');
const unfollowUser = require('./unfollowUser');

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
    getUserById: getUserById(buildUserRepository),
    createUser: createUser(buildUserRepository),
    deleteUser: deleteUser(buildUserRepository),
    followUser: followUser(buildUserRepository),
    unfollowUser: unfollowUser(buildUserRepository),
  };

  return services;
}

module.exports = buildServices;
