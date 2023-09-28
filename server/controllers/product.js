const { Product } = require("../models");

module.exports = {
  postProduct: async (req, res) => {
    const { name, price } = req.body;

    await Product.create({ name, price });

    return res.send({
      status: "ok",
      message: "product has been created",
    });
  },
  getProducts: async (req, res) => {
    const products = await Product.findAll();

    return res.send({
      status: "ok",
      data: products,
    });
  },
  getProductDetail: async (req, res) => {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (product) {
      return res.send({
        status: "ok",
        data: product,
      });
    } else {
      return res.status(404).send({
        status: "error",
        message: "product not found",
      });
    }
  },

  putProduct: async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const countDeleted = await Product.update(
      { name, price },
      {
        where: { id },
      }
    );
    if (!countDeleted[0]) {
      return res.status(404).send({
        status: 'error',
        message: 'product not found'
      })
    }
    
    return res.send({
      status: 'ok',
      message: 'product has been updated',
    })
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    await product.destroy();

    return res.send({
      status: "ok",
      message: "product has been deleted",
    });
  },
};
