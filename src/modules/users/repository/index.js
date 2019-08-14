const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const createUser = require('./createUser');
const deleteUser = require('./deleteUser');

const buildRepository = (db) => {
  const repository = {
    getAllUsers: getAllUsers(db),
    getUserById: getUserById(db),
    createUser: createUser(db),
    deleteUser: deleteUser(db),
  };

  return repository;
};

module.exports = buildRepository;
