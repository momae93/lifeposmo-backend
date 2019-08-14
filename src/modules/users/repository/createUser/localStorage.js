const { localDatabase } = require('../../__mocks__/data/');

function generateIdFromList() {
  const userIdList = localDatabase
    .users
    .map((user) => user.id);

  const newId = userIdList.length === 0 ? 1 : Math.max(...userIdList) + 1;

  return newId;
}

function domainToDataEntity(userDomainEntity) {
  const {
    firstname,
    lastname,
  } = userDomainEntity;

  const newIdUser = generateIdFromList();
  const userDataEntity = {
    id: newIdUser,
    firstname,
    lastname,
  };

  return userDataEntity;
}

function createUser(userDomainEntity) {
  const userDataEntity = domainToDataEntity(userDomainEntity);
  localDatabase
    .users
    .push(userDataEntity);

  return userDataEntity;
}

module.exports = createUser;
