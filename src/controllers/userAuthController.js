const config =  require('../config');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const userService = require('../services/user');

function login(req, res){
     return authService.authenticate(req.body)
     .then(token => {
          res.send({
               success: true,
               data: { token }
          });
     })
     .catch(err => {
          res.send({
               success: false,
               message: err.message //not the best error handling.
               //for better error handling visit github repository, link provided below
          });
     })
};
function register(req, res){
     var email = req.body.email;
     return userService.getUserByEmail(req.body.email || '')
     .then(exists => {
          if (exists){
               return res.send({
                   success: false,
                   message: 'Registration failed. User with this email already registered.'
               });
          }
          var user = {
               email: req.body.email,
               password: bcrypt.hashSync(req.body.password, config.saltRounds)
           }
          return userService.addUser(user)
          .then(() => res.send({success: true}));
     });
};
module.exports = {
    login,
    register
}