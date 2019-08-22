const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const getFollowersByIdUser = require('./getFollowersByIdUser');
const getFollowingByIdUser = require('./getFollowingByIdUser');
const createUser = require('./createUser');
const createFavoriteUser = require('./createFavoriteUser');
const deleteUser = require('./deleteUser');
const deleteFavoriteUser = require('./deleteFavoriteUser');

const buildRepository = (db) => {
  const repository = {
    getAllUsers: getAllUsers(db),
    getUserById: getUserById(db),
    getFollowersByIdUser: getFollowersByIdUser(db),
    getFollowingByIdUser: getFollowingByIdUser(db),
    createUser: createUser(db),
    createFavoriteUser: createFavoriteUser(db),
    deleteUser: deleteUser(db),
    deleteFavoriteUser: deleteFavoriteUser(db),
  };

  return repository;
};

module.exports = buildRepository;
