const { gql } = require('apollo-server');

const mutationType = gql`
  type Mutation {
    createUser(firstname: String!, lastname: String!): User!
  }
`;

module.exports = mutationType;
