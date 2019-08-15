const { GraphQLDate } = require('graphql-iso-date');

const {
  SCALAR_DATE,
} = require('../constants');

const customScalarResolvers = {
  [SCALAR_DATE]: GraphQLDate,
};

module.exports = customScalarResolvers;
