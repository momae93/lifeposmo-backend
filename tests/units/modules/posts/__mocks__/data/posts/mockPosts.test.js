const buildMockPosts = require('@PostMocks/data/posts/buildMockPosts');

describe('[MODULES][POSTS][__MOCKS__][DATAS] : mock Posts', () => {
  it('should match snapshot mock posts', async () => {
    const mockPosts = buildMockPosts;

    expect(mockPosts).toMatchSnapshot();
  });
});
