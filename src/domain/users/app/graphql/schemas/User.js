const { gql } = require('apollo-server');

const UserType = gql`
    type User {
        id: ID!
        username: String!
        password: String!
        firstname: String!
        lastname: String!
        description: String!
        birthdate: Date!
        isMale: Boolean!
        postsWritten: [Post!]
        followers: [User!]
        following: [User!]
    }
`;

module.exports = UserType;
