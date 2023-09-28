const express = require("express");
const app = express();
const port = 3000;

const restaurantList = [
  {
    name: "Wingheng Hongkong Dimsum",
    phone: "0821223311",
    address: "Jl. Tanjung Duren Raya No 76",
    daerah: "Jakarta",
  },
  {
    name: "Haka Dimsum",
    phone: "02122333",
    address: "Jl. Blok M",
    daerah: "Jakarta",
  },
  {
    name: "Kober",
    phone: "0361",
    address: "Jalan Renon",
    daerah: "Bali",
  },
];

app.get("/abel", (req, res) => {
  const json = {
    status: "ok",
    data: {
      sum: `1 + 1`,
    },
  };
  res.send(json);
});

app.get("/restoran/:daerah/:restoran", (req, res) => {
  console.log(req.params); // { restoran: 'kober' }

  if (req.params.daerah === "bali" || req.params.daerah === "bandung") {
    const json = {
      status: "ok",
      data: {
        nama: req.params.restoran,
        daerah: req.params.daerah,
        noHp: "0877777",
      },
    };

    res.send(json);
  } else {
    const jsonError = {
      status: "error",
      message: "data not found",
    };

    res.status(404).send(jsonError);
  }
});

app.get("/restaurants", function (req, res) {
  res.send({
    status: "ok",
    data: restaurantList,
  });
});

app.get("/v1/restaurants/:daerah/:restoran", function (req, res) {
  let keranjang;
  for (let i = 0; i < restaurantList.length; i++) {
    console.log(
      `I = ${i}\nreq: ${req.params.daerah}\nELEMEN KE I: ${restaurantList[i].daerah}`
    );
    if (
      req.params.daerah.toLowerCase() ===
        restaurantList[i].daerah.toLowerCase() &&
      req.params.restoran.toLowerCase() === restaurantList[i].name.toLowerCase()
    ) {
      keranjang = restaurantList[i];
    }
  }

  res.send({
    status: "ok",
    data: keranjang,
  });
});

app.get("/v2/restaurants/:daerah/:restoran", function (req, res) {
  // TODO: Baca apa itu destructuring
  const { daerah, restoran } = req.params;
  // let keranjang;
  // for (let i = 0; i < restaurantList.length; i++) {
  //     console.log(`I = ${i}\nreq: ${daerah}\nELEMEN KE I: ${restaurantList[i].daerah}`)
  //     if (daerah.toLowerCase() === restaurantList[i].daerah.toLowerCase()
  //         && restoran.toLowerCase() === restaurantList[i].name.toLowerCase()) {
  //         keranjang = restaurantList[i]
  //     }
  // }

  const keranjang = restaurantList.find(
    (restaurant) =>
      restaurant.daerah.toLowerCase() === daerah.toLowerCase() &&
      restaurant.name.toLowerCase() === restoran.toLowerCase()
  );

  if (keranjang) {
    res.send({
      status: "ok",
      data: keranjang,
    });
  } else {
    res.status(404).send({
      status: "error",
      message: "not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
