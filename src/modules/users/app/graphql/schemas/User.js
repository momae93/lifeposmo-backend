const { gql } = require('apollo-server');

const UserType = gql`
    type User {
        id: ID!
        firstname: String!
        lastname: String!
        postsWritten: [Post!]
    }
`;

module.exports = UserType;
