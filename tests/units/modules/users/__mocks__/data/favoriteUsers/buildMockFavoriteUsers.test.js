const buildMockFavoriteUsers = require('@UserMocks/data/favoriteUsers/buildMockFavoriteUsers');

describe('[MODULES][USERS][__MOCKS__][DATAS] : mock favorite Users', () => {
  it('should match snapshot mock favorite users', async () => {
    const mockFavoriteUsers = buildMockFavoriteUsers();

    expect(mockFavoriteUsers).toMatchSnapshot();
  });
});
