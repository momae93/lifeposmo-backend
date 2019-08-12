const { gql } = require('apollo-server');
const User = require('./User');
const query = require('./query');

const schemas = gql`
    ${User}
    ${query}
`;

module.exports = schemas;
