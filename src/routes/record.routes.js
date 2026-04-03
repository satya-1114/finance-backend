const express = require('express');
const router = express.Router();

const controller = require('../controllers/record.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { allowRoles } = require('../middleware/role.middleware');

// CREATE → ADMIN only
router.post(
  '/',
  authenticate,
  allowRoles('ADMIN'),
  controller.create
);

// READ → ADMIN + ANALYST + VIEWER
router.get(
  '/',
  authenticate,
  allowRoles('ADMIN', 'ANALYST', 'VIEWER'),
  controller.getAll
);

// UPDATE → ADMIN only
router.patch(
  '/:id',
  authenticate,
  allowRoles('ADMIN'),
  controller.update
);

// DELETE → ADMIN only
router.delete(
  '/:id',
  authenticate,
  allowRoles('ADMIN'),
  controller.delete
);

module.exports = router;