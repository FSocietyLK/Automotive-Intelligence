// import required modules
const express = require('express');
const passport = require('passport');

// import controllers
const userController = require('../controllers/userController');

// create express router
const router = express.Router();

// user auth routes
router.get('/login', userController.getLogin);
router.get('/signup', userController.getSignup);
router.post('/login', passport.authenticate("local", { failureRedirect: '/users/login/fail' }), userController.postLogin);
router.get('/login/fail', userController.getLoginFail);
router.get('/logout', userController.getLogout);
router.post('/signup', userController.postSignup);
router.get('/signup/:token', userController.getConfirmSignup);
router.get('/auth/google', userController.postSocialLogin);
router.get('/auth/facebook', userController.postSocialLogin);

// export router handles
module.exports = router;