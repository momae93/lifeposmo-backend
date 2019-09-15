const basicFavoriteUser = require('@UserMocks/data/favoriteUsers/basicFavoriteUser');

describe('[MODULES][USERS][__MOCKS__][DATAS] : basic favorite user', () => {
  it('should match snapshot basic favorite user', async () => {
    expect(basicFavoriteUser).toMatchSnapshot();
  });
});
