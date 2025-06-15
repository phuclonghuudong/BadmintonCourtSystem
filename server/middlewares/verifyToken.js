const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY_ACCESS_TOKEN || "your_secret_key";
const errorHandler = require("../utils/errorHandler");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const tokenFromHeader =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

  const token = tokenFromHeader || req.cookies?.accessToken;

  if (!token) {
    return errorHandler(res, "Token không hợp lệ hoặc thiếu!", 401);
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return errorHandler(res, "Token không hợp lệ hoặc hết hạn!", 403);
  }
};

module.exports = verifyToken;
