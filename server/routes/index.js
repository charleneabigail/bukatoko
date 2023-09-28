// const express = require('express');
// const router = express.Router();

const { Router } = require("express");

const { product, user } = require("../controllers");

// Contoh lain mengakses langsung file user, tidak perlu di destructuring
// const user = require('../controllers/user');

const router = Router();

router.get("/products/:id", product.getProductDetail);
router.get("/products", product.getProducts);
router.post("/products", product.postProduct);

router.post("/login", user.postLogin);
router.post("/register", user.postRegister);

module.exports = router;
