const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      return errorHandle(res, "Bạn không có quyền truy cập!", 403);
    }
    next();
  };
};

module.exports = authorizeRole;
