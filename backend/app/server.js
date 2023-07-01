const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT;
const routes = require("./routes/api");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("../swagger.json");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync()

app.get("/", (req, res) => {
    res.send('Hello World!');
});

app.use(routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});