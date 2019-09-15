const { gql } = require('apollo-server');

const queryType = gql`
  extend type Query {
    posts: [Post!]
    post(id: Int): Post
    postsWrittenBy(idAuthor: Int): [Post!]
  }
`;

module.exports = queryType;
