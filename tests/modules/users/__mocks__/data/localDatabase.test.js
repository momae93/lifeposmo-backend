const localDatabase = require('../../../../../src/modules/users/__mocks__/data/localDatabase');

describe('[MODULES][USERS][__MOCKS__][DATAS] : mockData', () => {
  it('should returns an object containing mocked datas', async () => {
    // FUNCTION TESTED
    const mockLocalDatabase = localDatabase;

    // EXPECTED
    const expectedMockLocalDatabase = {
      users: expect.any(Array),
      favoriteUsers: expect.any(Array),
    };

    expect(mockLocalDatabase).toMatchSnapshot();
    expect(mockLocalDatabase).toMatchObject(expectedMockLocalDatabase);
  });
});
