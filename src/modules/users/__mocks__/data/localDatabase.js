const buildMockUsers = require('./users/buildMockUsers');

const users = buildMockUsers();

const localDatabase = {
  users,
};

module.exports = localDatabase;
