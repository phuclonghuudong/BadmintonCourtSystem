const jwt = require("jsonwebtoken");
const epxIn = process.env.EXPIRES_IN_TOKEN;

const generateAccessToken = async (ACCOUNTS) => {
  const token = await jwt.sign(
    { ID: ACCOUNTS.ID, ROLE: ACCOUNTS.ROLE, USERNAME: ACCOUNTS.USERNAME },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: epxIn }
  );
  return token;
};

const generateRefreshToken = async (ACCOUNTS) => {
  const token = await jwt.sign(
    { ID: ACCOUNTS.ID, ROLE: ACCOUNTS.ROLE, USERNAME: ACCOUNTS.USERNAME },
    process.env.SECRET_KEY_REFRESH_TOKEN,
    { expiresIn: epxIn }
  );

  return token;
};

module.exports = { generateAccessToken, generateRefreshToken };
