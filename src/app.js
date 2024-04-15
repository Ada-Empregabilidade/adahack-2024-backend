import express from 'express';
import cors from 'cors';
//import db from './infra/db/sequelize/models/index.js';
import router from './app/routes/router.js';

const app = express();

app.use(cors({ origin: 'http://localhost:8081' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// NÃO COMENTAR A LINHA ABAIXO
app.use(router);

//testar a rota: localhost:3000/api/manager/employee/1
// app.use('/api/manager/employee', router);

// MOVIDO PARA O ARQUIVO DE CONFIG DO SEQUELIZE: /model/index.js
// db.sequelize
//     .sync()
//     .then(() => console.log('Connection has been established successfully.'))
//     .catch(err =>
//         console.error('Unable to connect to the database:', err.message),
//     );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on-line. Port: ${PORT}.`);
});
