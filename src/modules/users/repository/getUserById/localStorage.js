const { localDatabase } = require('@UserMocks/data/');

function getUserById(id) {
  const searchedUser = localDatabase
    .users
    .find((user) => user.id === id);

  return searchedUser;
}

module.exports = getUserById;
