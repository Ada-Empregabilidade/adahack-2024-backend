const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  return res.status(200).json({ message: 'Tudo ok' });
})

module.exports = router;