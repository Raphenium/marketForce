const express = require("express");
const routes = require("./routes/routes");

// express app
const app = express();

// middleware
app.use(express.json());
// routes
app.use("/api", routes);

module.exports = app;
