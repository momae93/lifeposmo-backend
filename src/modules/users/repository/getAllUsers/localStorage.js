const { localDatabase } = require('../../__mocks__/data/');

function getAllUsers() {
  return localDatabase.users;
}

module.exports = getAllUsers;
