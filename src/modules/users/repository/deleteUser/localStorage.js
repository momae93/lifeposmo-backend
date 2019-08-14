const { localDatabase } = require('../../__mocks__/data/');

function deleteUser(id) {
  try {
    localDatabase.users = localDatabase
      .users
      .filter((user) => user.id !== id);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = deleteUser;
