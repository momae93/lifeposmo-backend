const { users = [] } = require('../../__mocks__/data/');

function getUserById(id) {
  const searchedUser = users.find((user) => user.id === id);

  return searchedUser;
}

module.exports = getUserById;
