const authController = require('./controllers/userAuthController');
const authMiddleware = require('./middlewares/auth');
module.exports.set = app => {
    app.post('/login',authMiddleware.checkAuth, authController.login);
    app.post('/register',authMiddleware.checkAuth, authController.register);
}