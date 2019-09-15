const BIRTHDATE_BASIC_USER = new Date(1993, 2, 12);

const basicUser = {
  username: 'basicUser',
  password: 'NotSoEncryptedPwd',
  firstname: 'Basic',
  lastname: 'User',
  description: 'Description of Basic User',
  isMale: true,
  birthdate: BIRTHDATE_BASIC_USER,
};

module.exports = basicUser;
