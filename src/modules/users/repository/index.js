const getAllUsers = require('./getAllUsers');

const buildRepository = (db) => {
  const repository = {
    getAllUsers: getAllUsers(db),
  };

  return repository;
};

module.exports = buildRepository;
