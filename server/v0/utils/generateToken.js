const jwt = require("jsonwebtoken");
const accessExpiresIn = process.env.ACCESS_EXPIRES_IN_TOKEN;
const refreshExpiresIn = process.env.REFRESH_EXPIRES_IN_TOKEN;

const generateAccessToken = async (ACCOUNTS) => {
  const token = await jwt.sign(
    { ID: ACCOUNTS.ID, ROLE: ACCOUNTS.ROLE, USERNAME: ACCOUNTS.USERNAME },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: accessExpiresIn }
  );
  return token;
};

const generateRefreshToken = async (ACCOUNTS) => {
  const token = await jwt.sign(
    { ID: ACCOUNTS.ID, ROLE: ACCOUNTS.ROLE, USERNAME: ACCOUNTS.USERNAME },
    process.env.SECRET_KEY_REFRESH_TOKEN,
    { expiresIn: refreshExpiresIn }
  );

  return token;
};

const generateResetToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY_RESET_PASSWORD, {
    expiresIn: "2m",
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
};
