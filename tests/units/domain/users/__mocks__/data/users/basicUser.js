const basicUser = require('@UserMocks/data/users/basicUser');

describe('[MODULES][USERS][__MOCKS__][DATAS] : basic', () => {
  it('should match snapshot basic user', async () => {
    expect(basicUser).toMatchSnapshot();
  });
});
