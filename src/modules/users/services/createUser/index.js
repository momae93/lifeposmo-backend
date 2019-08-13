const defaultBuildUserRepository = require('../../repository');

function appToDomainEntity(userAppEntity) {
  const {
    firstname,
    lastname,
  } = userAppEntity;

  const userDomainEntity = {
    firstname,
    lastname,
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
