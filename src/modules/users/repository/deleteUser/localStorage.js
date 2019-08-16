const { localDatabase } = require('../../__mocks__/data/');

function deleteUser(id) {
  try {
    if (localDatabase.users.find((user) => user.id === id)) {
      localDatabase.users = localDatabase
        .users
        .filter((user) => user.id !== id);
      return true;
    }
    throw new Error('User with id does not exist');
  } catch (error) {
    return false;
  }
}

module.exports = deleteUser;
