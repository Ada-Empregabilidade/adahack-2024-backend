const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const routes = require("./app/routes");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"]
}))
app.use(morgan("tiny"));
app.use(helmet());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/v1", routes);


const PORT = parseInt(process.env.PORT)

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
})