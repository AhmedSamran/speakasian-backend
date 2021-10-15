const Users = require('../models').User;

const addUser = user => Users.create(user);
const getUserByEmail= email => Users.findOne({where: {email}});

module.exports = {
	addUser,
	getUserByEmail
}