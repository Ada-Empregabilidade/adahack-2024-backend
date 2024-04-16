const express = require("express");
const cors = require("cors");
const db = require('./models'); 

const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", err.message));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on-line. Port: ${PORT}.`);
});
