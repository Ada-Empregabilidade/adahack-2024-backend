const express = require("express");
const cors = require("cors");
const db = require('./models'); 

const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Testar rota" });
});

db.sequelize.sync()
  .then(() => console.log("Banco foi sincronizado"))
  .catch(err => console.error("Erro ao sincronizar o Banco:", err.message));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}.`);
});
