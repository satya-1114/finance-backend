const express = require('express');
const router = express.Router();

const controller = require('../controllers/dashboard.controller');
const { authenticate } = require('../middleware/auth.middleware');

router.get('/summary', authenticate, controller.summary);
router.get('/category', authenticate, controller.category);
router.get('/recent', authenticate, controller.recent);


module.exports = router;