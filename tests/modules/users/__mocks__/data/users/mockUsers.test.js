const mockData = require('../../../../../../src/modules/users/__mocks__/data/users/mockUsers');

describe('[MODULES][USERS][__MOCKS__][DATAS] : mock Users', () => {
  it('should match snapshot mock users', async () => {
    const mockUsers = mockData;

    expect(mockUsers).toMatchSnapshot();
  });
});
