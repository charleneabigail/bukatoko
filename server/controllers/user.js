// POST login
const postLogin = (req, res) => {
  // const username = req.body.username;
  // const password = req.body.password;

  // Menggunakan cara destructuring untuk mengambil nilai dari object
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.send({
      status: "ok",
      data: {
        token: "123456",
      },
    });
  } else {
    res.status(401).send({
      status: "error",
      message: "Invalid username & password.",
    });
  }
};

// POST register

module.exports = { postLogin };
