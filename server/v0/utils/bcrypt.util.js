const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10;

const hashPassword = async (txtPassword) => {
  const hashed = await bcrypt.hash(txtPassword, SALT_ROUNDS);
  return hashed;
};

const comparePassword = async (txtPassword, hashedPassword) => {
  return bcrypt.compare(txtPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
