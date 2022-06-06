const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Account = sequelize.define("account", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  accountNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Account;
