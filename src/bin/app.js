const { buildGraphqlServer } = require('./servers');
const appServices = require('./services/appServices');

const graphqlServer = buildGraphqlServer(appServices);

graphqlServer.start();
