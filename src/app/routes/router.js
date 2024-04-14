import express from 'express';
const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

export default router;
