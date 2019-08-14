const { gql } = require('apollo-server');

const mutationType = gql`
  extend type Mutation {
    createPost(title: String!, description: String!, solution: String!, idAuthor: Int!): User!
    deletePost(id: ID!): Boolean!
  }
`;

module.exports = mutationType;
