const { localDatabase } = require('@PostMocks/data/');

function getUserById(id) {
  const searchedUser = localDatabase
    .posts
    .find((user) => user.id === id);

  return searchedUser;
}

module.exports = getUserById;
