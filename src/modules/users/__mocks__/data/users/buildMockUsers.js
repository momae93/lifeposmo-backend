const BIRTHDATE_USER_ID_ONE = new Date(1996, 8, 28);
const BIRTHDATE_USER_ID_TWO = new Date(1993, 2, 12);

const buildMocksUsers = () => (
  [
    {
      id: 1,
      username: 'mickaelau',
      password: 'NotSoEncryptedPwd',
      firstname: 'Mickael',
      lastname: 'AU',
      description: 'Description of Mickael Au',
      isMale: true,
      birthdate: BIRTHDATE_USER_ID_ONE,
    },
    {
      id: 2,
      username: 'johndoe',
      password: 'NotSoEncryptedPwd',
      firstname: 'John',
      lastname: 'DOE',
      description: 'Description of John Doe',
      isMale: true,
      birthdate: BIRTHDATE_USER_ID_TWO,
    },
  ]
);

module.exports = buildMocksUsers;
