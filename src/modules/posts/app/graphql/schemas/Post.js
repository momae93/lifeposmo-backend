const { gql } = require('apollo-server');

const PostType = gql`
    type Post {
        id: ID!
        title: String!
        description: String!
        solution: String!
        totalClaps: Int!
        author: User!
    }
`;

module.exports = PostType;
