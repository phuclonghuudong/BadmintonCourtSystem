const express = require("express");
const router = express.Router();
const nhomQuyenController = require("../controllers/NhomQuyen.controller");
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
    middlewares: useAuthRoute("access", ["ADMIN"]),
    handler: nhomQuyenController.getAllNhomQuyen,
  },
  {
    method: "get",
    path: "/detail/:MaNhomQuyen",
    middlewares: useAuthRoute("access", ["ADMIN"]),
    handler: nhomQuyenController.getNhomQuyenById,
  },
  {
    method: "post",
    path: "/create",
    middlewares: useAuthRoute("access", ["ADMIN"]),
    handler: nhomQuyenController.addNhomQuyen,
  },
  {
    method: "put",
    path: "/update/:MaNhomQuyen",
    middlewares: useAuthRoute("access", ["ADMIN"]),
    handler: nhomQuyenController.updateNhomQuyen,
  },
  {
    method: "put",
    path: "/delete/:MaNhomQuyen",
    middlewares: useAuthRoute("access", ["ADMIN"]),
    handler: nhomQuyenController.deleteNhomQuyen,
  },
];
routes.forEach(({ method, path, middlewares = [], handler }) => {
  router[method](path, ...middlewares, handler);
});

module.exports = router;
