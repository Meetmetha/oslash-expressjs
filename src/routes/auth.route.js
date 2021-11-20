const express = require('express');
const validate = require('../middlewares/validate');
const authUserValidation = require('../validations/authUser.validation');
const authUserController = require('../controllers/authuser.controller');
const deviceauth = require('../middlewares/deviceauth');

const router = express.Router();

router.post('/register', deviceauth(), validate(authUserValidation.registeruser), authUserController.register);
router.post('/login', deviceauth(), validate(authUserValidation.login), authUserController.login);
router.get('/logout', authUserController.logout);

module.exports = router;