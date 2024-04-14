require('dotenv').config()

const express = require('express');
const app = express();
const router = require('./app/routes/router');

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server on-line. Port: ${PORT}`);
});
