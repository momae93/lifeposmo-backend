const PostSchema = require('@PostApp/graphql/schemas/Post');

describe('[MODULES][POSTS][APP][GRAPHQL - SCHEMAS] : Post schemas', () => {
  it('should returns schema of Post', async () => {
    // FUNCTION TESTED
    expect(PostSchema).toMatchSnapshot();
  });
});
