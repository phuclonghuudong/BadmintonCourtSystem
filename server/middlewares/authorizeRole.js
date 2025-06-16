const errorHandler = require("../utils/errorHandler");

const authorizeRole = (allowedRoles = []) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user?.ROLE) {
      return errorHandler(res, "Không xác định được vai trò người dùng!", 403);
    }

    const userRole = user?.ROLE;

    if (!allowedRoles.includes(userRole)) {
      return errorHandler(
        res,
        "Bạn không có quyền truy cập tài nguyên này!",
        403
      );
    }

    next();
  };
};

module.exports = authorizeRole;
