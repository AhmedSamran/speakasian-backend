require('dotenv').config();
module.exports = {
    port: process.env.PORT,
    db_host: process.env.DB_HOST,
    database: process.env.DATABASE,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_dialect: process.env.DB_DIALECT,
    saltRounds: parseInt(process.env.saltRounds),
    jwtSecret:  process.env.jwtSecret,
    tokenExpireTime: process.env.tokenExpireTime
}