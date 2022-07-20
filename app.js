import express from "express";
import swaggerUiExpress from "swagger-ui-express";
const swaggerDocument = require("./swagger.json");

const app = express();


const message = "Bonjour ceci est un test !"


app.listen(4000, () => {
  console.log("serveur run");
});