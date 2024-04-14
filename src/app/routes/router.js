const express = require('express');
const admin = require('../controllers/admin.controller.js');
const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

// admin router
router.post('/api/admin/manager', admin.create);

module.exports = router;
