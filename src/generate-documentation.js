import swaggerAutogen from "swagger-autogen";

const options = {
  info: {
    title: "Corp Solutions API",
    description:
      "API para gerenciamento de funcionários e métricas de inclusão e diversidade",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger.json";
const routes = ["./src/app/routes/router.js"];

swaggerAutogen(outputFile, routes, options);
