const { User } = require("../models");

// POST login
const postLogin = async (req, res) => {
  // Menggunakan cara destructuring untuk mengambil nilai dari object
  const { username, password } = req.body;
  const findUser = await User.findOne({ where: {username, password}})

  if (findUser) {
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
const postRegister = async (req, res) => {
  const { username, password } = req.body;

  const findUser = await User.findOne({ where: { username }});

  if (findUser) {
    return res.status(400).send({
      status: 'error',
      message: 'User already exist'
    });
  }

  const user = await User.create({username, password});

  return res.send({
    status: 'ok',
    data: user
  })
}

module.exports = { postLogin, postRegister };
