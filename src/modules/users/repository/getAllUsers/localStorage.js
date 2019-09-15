const { localDatabase } = require('@UserMocks/data/');

function getAllUsers() {
  return localDatabase.users;
}

module.exports = getAllUsers;
