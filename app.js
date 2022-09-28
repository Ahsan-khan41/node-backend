require("dotenv").config();
const database = require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

database.connect();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());
app.use(cors());

module.exports = { app, router: express.Router() };
