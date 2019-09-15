const data = require('@PostMocks/data');

describe('[MODULES][POSTS][__MOCKS__][DATAS] : mockData', () => {
  it('should returns an object containing mocked datas', async () => {
    // FUNCTION TESTED
    const mockData = data;

    // EXPECTED
    const expectedMockdata = {
      localDatabase: expect.any(Object),
      buildMockPosts: expect.any(Function),
      posts: expect.any(Array),
    };

    expect(mockData).toMatchObject(expectedMockdata);
  });
});
