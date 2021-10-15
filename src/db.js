const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.db_username, config.db_password, {
    host: config.db_host,
    dialect: config.db_dialect
  });
//require('sequelize-values')(sequelize);
module.exports = sequelize;