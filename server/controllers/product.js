const { Product } = require('../models');

module.exports = {
  postProduct: async (req, res) => {
    const { name, price } = req.body;

    await Product.create({ name, price });

    return res.send({
      status: "ok",
      data: {
        name,
        price,
      },
    });
  },
  getProducts: async (req, res) => {
    const products = await Product.findAll();

    return res.send({
      status: "ok",
      data: products,
    });
  },
  getProductDetail: (req, res) => {
    const { id } = req.params;

    return res.send({
      status: "ok",
      data: {
        id,
      },
    });
  },
};
