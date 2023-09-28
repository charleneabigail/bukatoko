const { DataTypes } = require("sequelize");

const user = (sequelize) =>
  sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });

module.exports = user;
