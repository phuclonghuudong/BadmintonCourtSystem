const dotenv = require("dotenv");
dotenv.config();
const { responseHandler } = require("../utils/responseHandler");
const jwt = require("jsonwebtoken");

const verifyToken = () => {
  return (req, res, next) => {
    const secretKey = process.env.SECRET_KEY_ACCESS_TOKEN || "secret Key";
    const headers = req.headers.authorization;
    const token = headers ? headers.split(" ")[1] : "";

    if (!token)
      return responseHandler(res, 401, "KHÔNG CÓ QUYỀN TRUY CẬP!", null, true);

    try {
      const decode = jwt.verify(token, secretKey);
      console.log("verify: ", decode);
      if (!decode)
        return responseHandler(
          res,
          400,
          "TOKEN KHÔNG HỢP LẸ HOẶC HẾT HẠN.",
          null,
          true
        );

      next();
    } catch (error) {
      return responseHandler(
        res,
        401,
        "TOKEN KHÔNG HỢP LỆ HOẶC HẾT HẠN!",
        null,
        true
      );
    }
  };
};

module.exports = {
  verifyToken,
};
