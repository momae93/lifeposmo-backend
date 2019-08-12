const { schemas: userSchema } = require('../../modules/users');

/**
 * Combines all modules' schemas
 */

function combineSchemas() {
  return [
    userSchema,
  ];
}

module.exports = combineSchemas;
