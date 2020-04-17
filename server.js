const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config");

const server = express();

const recipeRouter = require("./recipes/recipe-router");

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/api/recipes", (req, res) => {
  res.status(200).json({ api: "recipes working" });
});

module.exports = server;