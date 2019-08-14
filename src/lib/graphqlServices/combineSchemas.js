const { gql } = require('apollo-server');

const { schemas: userSchema } = require('../../modules/users');
const { schemas: postSchema } = require('../../modules/posts');

/**
 * Combines all modules' schemas
 */

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

function combineSchemas() {
  return [
    linkSchema,
    userSchema,
    postSchema,
  ];
}

module.exports = combineSchemas;
