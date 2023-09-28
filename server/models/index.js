const { Sequelize } = require("sequelize");
const user = require('./User');
const product = require('./Product');

const sequelize = new Sequelize({ dialect: 'sqlite', storage: './bukatoko.sqlite'});

const User = user(sequelize);
const Product = product(sequelize); 

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`);
  });

module.exports = {
  User,
  Product,
};
