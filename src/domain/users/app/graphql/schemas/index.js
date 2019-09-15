const { gql } = require('apollo-server');
const User = require('./User');
const queryType = require('./query');
const mutationType = require('./mutation');

const schemas = gql`
    ${User}
    ${queryType}
    ${mutationType}
`;

module.exports = schemas;
