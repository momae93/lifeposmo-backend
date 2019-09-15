const data = require('@UserMocks/data/');

describe('[MODULES][USERS][__MOCKS__][DATAS] : mockData', () => {
  it('should returns an object containing mocked datas', async () => {
    // FUNCTION TESTED
    const mockData = data;

    // EXPECTED
    const expectedMockdata = {
      localDatabase: expect.any(Object),
      buildMockUsers: expect.any(Function),
      buildMockFavoriteUsers: expect.any(Function),
    };

    expect(mockData).toMatchSnapshot();
    expect(mockData).toMatchObject(expectedMockdata);
  });
});
