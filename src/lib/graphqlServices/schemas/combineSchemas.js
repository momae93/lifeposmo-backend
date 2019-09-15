const { gql } = require('apollo-server');

const { schemas: userSchema } = require('@UserModule');
const { schemas: postSchema } = require('@PostModule');

const customScalarSchemas = require('./customScalarSchemas');


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
    customScalarSchemas,
  ];
}

module.exports = combineSchemas;
