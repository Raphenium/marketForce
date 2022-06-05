const sequelize = require("./utils/database");
const app = require("./app");

sequelize
  .sync()
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
