const buildMockUsers = require('../../../../../../src/modules/users/__mocks__/data/users/buildMockUsers');

describe('[MODULES][USERS][__MOCKS__][DATAS] : mock Users', () => {
  it('should match snapshot mock users', async () => {
    const mockUsers = buildMockUsers();

    expect(mockUsers).toMatchSnapshot();
  });
});
