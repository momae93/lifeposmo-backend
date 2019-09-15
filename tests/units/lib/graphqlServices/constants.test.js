const { constants } = require('@GraphqlService');

describe('[LIB][GRAPHQL] : constants', () => {
  it('should match snapshot lib graphql constants', async () => {
    expect(constants).toMatchSnapshot();
  });
});
