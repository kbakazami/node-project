import express from "express";
import bodyParser from "body-parser";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import optionsSwagger from "./config/config-swagger.js";
import db from "./services/connexion-bdd.js";

const app = express();

const specs = swaggerJSDoc(optionsSwagger);

// parse request of content type: application/json
app.use(bodyParser.json());

// parse request of content type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to API' });
});

const message = "Bonjour ceci est un test !"

app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(specs)
);

app.listen(4000, () => {
  console.log("serveur run");
});