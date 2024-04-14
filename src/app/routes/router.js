const express = require('express');
const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

module.exports = router;
