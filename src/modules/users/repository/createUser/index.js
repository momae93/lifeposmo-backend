const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const createUser = () => (userDomainEntity) => {
  const isLocalStrategy = true;
  const users = isLocalStrategy ? localStorageStrategy(userDomainEntity) : dbStrategy();

  return users;
};

module.exports = createUser;
