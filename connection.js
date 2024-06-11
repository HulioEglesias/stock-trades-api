
let connectionManager = {getConnection: () => {}, clearDatabase: () => {}, closeConnection: () => {}};

const SequelizeConnection = require('./lib/sequelize.connection');
connectionManager = new SequelizeConnection();



module.exports = connectionManager;
