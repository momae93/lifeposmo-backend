const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const createUser = require('./createUser');
const createFavoriteUser = require('./createFavoriteUser');
const deleteUser = require('./deleteUser');
const deleteFavoriteUser = require('./deleteFavoriteUser');

const buildRepository = (db) => {
  const repository = {
    getAllUsers: getAllUsers(db),
    getUserById: getUserById(db),
    createUser: createUser(db),
    createFavoriteUser: createFavoriteUser(db),
    deleteUser: deleteUser(db),
    deleteFavoriteUser: deleteFavoriteUser(db),
  };

  return repository;
};

module.exports = buildRepository;
