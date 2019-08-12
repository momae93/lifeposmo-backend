const createClient = require('./createClient');

function buildDbServices(db) {
  const dbServices = {
    createClient: createClient(db),
  };

  return dbServices;
}

module.exports = buildDbServices;
