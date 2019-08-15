const defaultBuildUserRepository = require('../../repository');

function appToDomainEntity(userAppEntity) {
  const {
    username,
    password,
    firstname,
    lastname,
    description,
    isMale,
    birthdate,
  } = userAppEntity;

  const userDomainEntity = {
    username,
    password,
    firstname,
    lastname,
    description,
    isMale,
    birthdate,
  };

  return userDomainEntity;
}

/**
 * DOMAIN level - Create user
 * @param {*} userService
 */
const createUser = (
  buildUserRepository = defaultBuildUserRepository,
) => (userAppEntity) => {
  const repository = buildUserRepository();
  const userDomainEntity = appToDomainEntity(userAppEntity);

  return repository.createUser(userDomainEntity);
};

module.exports = createUser;
