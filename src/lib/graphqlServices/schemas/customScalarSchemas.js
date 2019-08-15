const { gql } = require('apollo-server');
const {
  SCALAR_DATE,
} = require('../constants');

const customScalarSchemas = gql`
    scalar ${SCALAR_DATE}
`;


module.exports = customScalarSchemas;
