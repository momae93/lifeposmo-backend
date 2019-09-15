const { gql } = require('apollo-server');
const Post = require('./Post');
const queryType = require('./query');
const mutationType = require('./mutation');

const schemas = gql`
    ${Post}
    ${queryType}
    ${mutationType}
`;

module.exports = schemas;
