const graphQLLib = require('../../../../src/lib/graphqlServices');

describe('[LIB][GRAPHQL] : graphql lib', () => {
  it('should match snapshot from graphql lib', async () => {
    expect(graphQLLib).toMatchSnapshot();
  });
});
