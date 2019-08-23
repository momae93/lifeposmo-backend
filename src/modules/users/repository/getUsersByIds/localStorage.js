const { localDatabase } = require('../../__mocks__/data/');

function getUsersByIds(idUsers = []) {
  const searchedUsers = localDatabase
    .users
    .filter((user) => idUsers.includes(user.id));

  return searchedUsers;
}

module.exports = getUsersByIds;
