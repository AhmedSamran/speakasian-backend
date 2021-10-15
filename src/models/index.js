const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = sequelize.define('user', {
    email: Sequelize.STRING,
    password: Sequelize.STRING,
});

module.exports = {
    User
 }