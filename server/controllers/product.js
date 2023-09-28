const products = [
  {
    id: 1,
    name: "Shampoo",
    price: 10000,
  },
  {
    id: 2,
    name: "Baygon",
    price: 20000,
  },
  {
    id: 3,
    name: "Pepsodent",
    price: 15000,
  },
];

module.exports = {
  postProduct: (req, res) => {
    const { name, price } = req.body;

    products.push({
      id: products.length + 1,
      name,
      price,
    });

    return res.send({
      status: "ok",
      data: {
        name,
        price,
      },
    });
  },
  getProducts: (req, res) => {
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
