const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const generateAccessToken = async (payload) => {
  const token = await jwt.sign(payload, process.env.SECRET_KEY_ACCESS_TOKEN, {
    expiresIn: "1h",
  });

  return token;
};

module.exports = generateAccessToken;
