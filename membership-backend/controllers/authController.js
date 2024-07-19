const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
require("dotenv").config(); // To load environment variables from .env file

const register = (req, res) => {
  const { firstname, lastname, date_of_birth, id_number, password } = req.body;

  if (!firstname || !lastname || !date_of_birth || !id_number || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  userModel.createUser(
    firstname,
    lastname,
    id_number,
    date_of_birth,
    hashedPassword,
    (err, user) => {
      if (err)
        return res.status(500).json({ message: "Error registering user" });
      res.status(201).json(user);
    }
  );
};

const login = (req, res) => {
  const { id_number, password } = req.body;

  if (!id_number || !password) {
    return res
      .status(400)
      .json({ message: "ID number and password are required" });
  }

  userModel.getUserByIdNumber(id_number, (err, user) => {
    if (err) return res.status(500).json({ message: "Error retrieving user" });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  });
};

module.exports = { register, login };
