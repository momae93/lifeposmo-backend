const users = require('./users/users');
const buildMockUsers = require('./users/buildMockUsers');
const localDatabase = require('./localDatabase');

module.exports = {
  buildMockUsers,
  users,
  localDatabase,
};
