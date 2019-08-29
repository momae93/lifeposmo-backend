const localDatabase = require('../../../../../../src/modules/posts/__mocks__/data/localDatabase');

describe('[MODULES][POSTS][__MOCKS__][DATAS] : mockData', () => {
  it('should returns an object containing mocked datas', async () => {
    // FUNCTION TESTED
    const mockLocalDatabase = localDatabase;

    // EXPECTED
    const expectedMockLocalDatabase = {
      posts: expect.any(Array),
    };

    expect(mockLocalDatabase).toMatchObject(expectedMockLocalDatabase);
  });
});
