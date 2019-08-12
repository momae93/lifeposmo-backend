const { mockUsers } = require('../../__mocks__/data/');

function getAllUsers() {
  const users = mockUsers();

  return users;
}

module.exports = getAllUsers;
