const express = require("express");
const routesCandidato = require("./routes.candidato");
const routesDashboard = require("./routes.dashboard");

const routes = express.Router();
routes.use(routesCandidato);
routes.use(routesDashboard);

module.exports = routes;