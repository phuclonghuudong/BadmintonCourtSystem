const jwt = require("jsonwebtoken");

const generateRefreshToken = async (payload) => {
  const token = await jwt.sign(payload, process.env.SECRET_KEY_REFRESH_TOKEN, {
    expiresIn: "7d",
  });

  return token;
};

module.exports = generateRefreshToken;
