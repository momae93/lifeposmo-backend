const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');

const buildRepository = (db) => {
  const repository = {
    getAllUsers: getAllUsers(db),
    getUserById: getUserById(db),
  };

  return repository;
};

module.exports = buildRepository;
