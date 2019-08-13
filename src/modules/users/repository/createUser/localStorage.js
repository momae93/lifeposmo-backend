const { users = [] } = require('../../__mocks__/data/');

function domainToDataEntity(userDomainEntity) {
  const {
    firstname,
    lastname,
  } = userDomainEntity;

  const userDataEntity = {
    id: 3,
    firstname,
    lastname,
  };

  return userDataEntity;
}

function createUser(userDomainEntity) {
  const userDataEntity = domainToDataEntity(userDomainEntity);
  users.push(userDataEntity);

  return userDataEntity;
}

module.exports = createUser;
