require("dotenv").config(); // Import library dotenv agar bisa mengakses konfigurasi melalui process.env yang ada di file .env
const express = require("express");

const router = require('./routes/index.js') // import file index.js dari folder ./routes.

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Pasang router.
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
