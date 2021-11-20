const express = require('express');
const validate = require('../middlewares/validate');
const authuser = require('../middlewares/authUser');
const shortcutValidation = require('../validations/shortcut.validation');
const shortcutController = require('../controllers/shortcut.controller');

const router = express.Router();

router.route('/').get(authuser(), shortcutController.getShortcut);
router.post('/create', authuser(), validate(shortcutValidation.createShortcut), shortcutController.createShortcut);
router.post('/delete', authuser(), validate(shortcutValidation.deleteShortcut), shortcutController.deleteShortcut);

module.exports = router;