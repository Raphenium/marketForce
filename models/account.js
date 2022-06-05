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

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const blogSchema = new Schema(
//   {
//     accountNumber: {
//       type: String,
//       required: true,
//     },
//     amount: {
//       type: Number,
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Blog = mongoose.model("Blog", blogSchema);
// module.exports = Blog;
