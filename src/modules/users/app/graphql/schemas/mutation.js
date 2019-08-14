const { gql } = require('apollo-server');

const mutationType = gql`
  extend type Mutation {
    createUser(firstname: String!, lastname: String!): User!
    deleteUser(id: ID!): Boolean!
  }
`;

module.exports = mutationType;
