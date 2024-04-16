import dotenv from 'dotenv'

import express from "express";
import cors from "cors";
import router from "./app/routes/router.js";
import authorization from "./app/routes/middlewares/authorization.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// NÃO COMENTAR A LINHA ABAIXO
app.use("/api", authorization.authMiddleware, router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server on-line. Port: ${PORT}.`);
});
