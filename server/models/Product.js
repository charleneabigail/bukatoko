const { DataTypes } = require("sequelize");

const product = (sequelize) =>
  sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
  });

module.exports = product;
