const { gql } = require('apollo-server');

const queryType = gql`
  extend type Query {
    users: [User!]
    user(id: Int): User
    me: User
  }
`;

module.exports = queryType;
