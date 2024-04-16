import express from "express";
import cors from "cors";
import router from "./app/routes/router.js";
import authorization from './app/routes/middlewares/authorization.js';

const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// NÃO COMENTAR A LINHA ABAIXO
app.use("/api", authorization.authMiddleware, router);

//testar a rota: localhost:3000/api/manager/employee/1
// app.use('/api/manager/employee', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server on-line. Port: ${PORT}.`);
});
