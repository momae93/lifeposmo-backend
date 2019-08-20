const data = require('../../../../../src/modules/users/__mocks__/data');

describe('[MODULES][USERS][__MOCKS__][DATAS] : mockData', () => {
  it('should returns an object containing mocked datas', async () => {
    // FUNCTION TESTED
    const mockData = data;

    // EXPECTED
    const expectedMockdata = {
      localDatabase: expect.any(Object),
      buildMockUsers: expect.any(Function),
      users: expect.any(Array),
    };

    expect(mockData).toMatchObject(expectedMockdata);
  });
});
