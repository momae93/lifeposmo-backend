const { localDatabase } = require('../../__mocks__/data/');

function getUserById(id) {
  const searchedUser = localDatabase
    .posts
    .find((user) => user.id === id);

  return searchedUser;
}

module.exports = getUserById;
