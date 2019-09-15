const { localDatabase } = require('@UserMocks/data/');

function getUsersByIds(idUsers = []) {
  const searchedUsers = localDatabase
    .users
    .filter((user) => idUsers.includes(user.id));

  return searchedUsers;
}

module.exports = getUsersByIds;
