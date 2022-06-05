const Sequelize = require("sequelize");

const sequelize = new Sequelize("account", "root", "Raphenium1.", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
