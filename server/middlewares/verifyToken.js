const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const { responseHandler } = require("../utils/responseHandler");

const TOKEN_SECRET_KEYS = {
  access: process.env.SECRET_KEY_ACCESS_TOKEN || "default_access_secret",
  refresh: process.env.SECRET_KEY_REFRESH_TOKEN || "default_refresh_secret",
  reset: process.env.SECRET_KEY_RESET_PASSWORD || "default_reset_secret",
};

const verifyToken = (type = "access") => {
  return (req, res, next) => {
    const secretKey = TOKEN_SECRET_KEYS[type];
    let token = null;

    const authHeader = req.headers?.authorization;
    const tokenFromHeader =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null;

    if (type === "access" || type === "refresh") {
      token = tokenFromHeader || req.cookies?.[`${type}Token`];
    } else if (type === "reset") {
      token = req.body?.resetToken || req.query?.resetToken;
    }

    if (!token) {
      return responseHandler(res, 401, `Thiếu ${type} token!`, null, true);
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (err) {
      return responseHandler(
        res,
        403,
        `${type} token không hợp lệ hoặc đã hết hạn!`,
        null,
        true
      );
    }
  };
};

module.exports = verifyToken;
