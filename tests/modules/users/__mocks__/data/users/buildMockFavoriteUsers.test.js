const buildMockFavoriteUsers = require('../../../../../../src/modules/users/__mocks__/data/users/buildMockFavoriteUsers');

describe('[MODULES][USERS][__MOCKS__][DATAS] : mock favorite Users', () => {
  it('should match snapshot mock favorite users', async () => {
    const mockFavoriteUsers = buildMockFavoriteUsers();

    expect(mockFavoriteUsers).toMatchSnapshot();
  });
});
