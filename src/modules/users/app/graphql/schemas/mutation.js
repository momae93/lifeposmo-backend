const { gql } = require('apollo-server');

const mutationType = gql`
  extend type Mutation {
    createUser(
      username: String!,
      password: String!,
      firstname: String!,
      lastname: String!,
      description: String!,
      isMale: Boolean!
      birthdate: Date!
    ): User!

    deleteUser(
      id: ID!
    ): Boolean!

    followUser(
      idUser: ID!,
      idFavoriteUser: ID!,
    ): User!

    unfollowUser(
      idFavorite: ID!
    ): Boolean!
  }
`;

module.exports = mutationType;
