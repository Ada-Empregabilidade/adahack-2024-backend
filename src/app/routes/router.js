const express = require('express');
const admin = require('../controllers/admin.controller.js');
const employeeController = require('../controllers/EmployeeController.js');
const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

// admin router
router.post('/api/admin/manager', admin.create);

//employee router
router.put('/api/employee/profile', employeeController.updateProfile)

module.exports = router;
