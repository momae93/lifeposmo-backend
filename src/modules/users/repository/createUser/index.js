const dbStrategy = require('./db');
const localStorageStrategy = require('./localStorage');

const createUser = () => (userDomainEntity) => {
  const isLocalStrategy = true;
  const user = isLocalStrategy ? localStorageStrategy(userDomainEntity) : dbStrategy();

  return user;
};

module.exports = createUser;
