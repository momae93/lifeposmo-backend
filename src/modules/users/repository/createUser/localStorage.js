const { localDatabase } = require('@UserMocks/data/');

function generateIdFromList() {
  const userIdList = localDatabase
    .users
    .map((user) => user.id);

  const newId = userIdList.length === 0 ? 1 : Math.max(...userIdList) + 1;

  return newId;
}

function domainToDataEntity(userDomainEntity) {
  const {
    username,
    password,
    firstname,
    lastname,
    description,
    isMale,
    birthdate,
  } = userDomainEntity;

  const newIdUser = generateIdFromList();
  const userDataEntity = {
    id: newIdUser,
    username,
    password,
    firstname,
    lastname,
    description,
    isMale,
    birthdate,
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
