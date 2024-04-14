const express = require('express');
const cors = require('cors');
const db = require('./infra/db/sequelize/models');
const router = require('./app/routes/router');

const app = express();

app.use(cors({ origin: 'http://localhost:8081' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

db.sequelize
    .sync()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err =>
        console.error('Unable to connect to the database:', err.message),
    );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on-line. Port: ${PORT}.`);
});
