const express = require("express");
const router = express.Router();
const khachHangController = require("../controllers/KhachHang.controller");
const auth = require("../middlewares/verifyToken");
const authorizeRole = require("../middlewares/authorizeRole");

const useAuthRoute = (type, roles = []) => {
  const middlewares = [];
  if (type) middlewares.push(auth(type));
  if (roles.length > 0) middlewares.push(authorizeRole(roles));
  return middlewares;
};

const routes = [
  {
    method: "get",
    path: "/all",
    middlewares: useAuthRoute("access", ["ADMIN", "NHANVIEN"]),
    handler: khachHangController.getAllUsers,
  },
  {
    method: "get",
    path: "/detail/:MaKhachHang",
    middlewares: useAuthRoute("access", ["ADMIN", "NHANVIEN"]),
    handler: khachHangController.getUserById,
  },
  {
    method: "post",
    path: "/create",
    middlewares: useAuthRoute("access", ["ADMIN", "NHANVIEN"]),
    handler: khachHangController.addUser,
  },
  {
    method: "put",
    path: "/update/:MaKhachHang",
    middlewares: useAuthRoute("access", ["ADMIN", "NHANVIEN"]),
    handler: khachHangController.updateUsers,
  },
  {
    method: "put",
    path: "/delete/:MaKhachHang",
    middlewares: useAuthRoute("access", ["ADMIN"]),
    handler: khachHangController.deleteUsers,
  },
];
routes.forEach(({ method, path, middlewares = [], handler }) => {
  router[method](path, ...middlewares, handler);
});

module.exports = router;
