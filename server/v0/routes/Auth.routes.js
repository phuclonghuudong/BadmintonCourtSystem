const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth.controller");
const auth = require("../middlewares/verifyToken");
const authorizeRole = require("../middlewares/authorizeRole");

const useAuthRoute = (type, roles = []) => {
  const middlewares = [];
  if (type) middlewares.push(auth(type));
  if (roles.length > 0) middlewares.push(authorizeRole(roles));
  return middlewares;
};

const routes = [
  { method: "post", path: "/register", handler: authController.registerUser },
  { method: "post", path: "/login", handler: authController.loginUser },
  {
    method: "post",
    path: "/refresh-token",
    middlewares: useAuthRoute("refresh", ["ADMIN", "NHANVIEN"]),
    handler: authController.refreshTokenController,
  },
  {
    method: "post",
    path: "/logout",
    middlewares: useAuthRoute("access", ["ADMIN", "NHANVIEN"]),
    handler: authController.logoutUser,
  },
  {
    method: "get",
    path: "/details",
    middlewares: useAuthRoute("access", ["ADMIN", "NHANVIEN"]),
    handler: authController.getDetailUser,
  },
  {
    method: "put",
    path: "/forgot-password",
    middlewares: useAuthRoute(null, ["ADMIN", "NHANVIEN"]),
    handler: authController.forgotPassword,
  },
  {
    method: "put",
    path: "/verify-forgot-password-otp",
    middlewares: useAuthRoute(null, ["ADMIN", "NHANVIEN"]),
    handler: authController.verifyForgotPasswordOtp,
  },
  {
    method: "put",
    path: "/reset-password",
    middlewares: useAuthRoute("reset", ["ADMIN", "NHANVIEN"]),
    handler: authController.resetPassword,
  },
];

routes.forEach(({ method, path, middlewares = [], handler }) => {
  router[method](path, ...middlewares, handler);
});

module.exports = router;
