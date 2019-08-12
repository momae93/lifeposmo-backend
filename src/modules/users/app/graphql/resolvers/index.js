const buildQueryResolvers = require('./buildQueryResolvers');

const buildResolvers = (userService) => ({
  Query: buildQueryResolvers(userService),
});

module.exports = buildResolvers;
