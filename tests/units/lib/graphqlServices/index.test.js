const graphQLLib = require('@GraphqlService');

describe('[LIB][GRAPHQL] : graphql lib', () => {
  it('should match snapshot from graphql lib', async () => {
    expect(graphQLLib).toMatchSnapshot();
  });
});
