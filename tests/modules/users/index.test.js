const userModule = require('../../../src/modules/users/');

describe('[MODULES][USERS] : user module', () => {
  it('should match snapshot from user module', async () => {
    expect(userModule).toMatchSnapshot();
  });
});
