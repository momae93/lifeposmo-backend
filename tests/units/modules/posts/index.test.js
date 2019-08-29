const postModule = require('../../../../src/modules/posts/');

describe('[MODULES][POSTS] : post module', () => {
  it('should match snapshot from post module', async () => {
    expect(postModule).toMatchSnapshot();
  });
});
