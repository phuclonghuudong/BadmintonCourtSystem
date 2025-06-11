const khachHangService = require("../services/KhachHang.service");
const successHandler = require("../utils/successHandler");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await khachHangService.getAllUsers();
    successHandler(res, "DANH SÁCH TẤT CẢ KHÁCH HÀNG", result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { MaKhachHang } = req.params;

  try {
    const result = await khachHangService.getUserById(MaKhachHang);

    successHandler(res, "THÔNG TIN KHÁCH HÀNG!", result);
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  const {
    Email,
    HoTen,
    SoDienThoai,
    CCCD,
    DiaChi,
    GioiTinh,
    NgaySinh,
    TrangThai,
  } = req.body;
  try {
    const result = await khachHangService.createUser({
      Email,
      HoTen,
      SoDienThoai,
      CCCD,
      DiaChi,
      GioiTinh,
      NgaySinh,
      TrangThai,
    });
    successHandler(res, "THÊM MỚI KHÁCH HÀNG THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};
const updateUsers = async (req, res, next) => {
  const { MaKhachHang } = req.params;
  const {
    Email,
    HoTen,
    SoDienThoai,
    CCCD,
    DiaChi,
    GioiTinh,
    NgaySinh,
    TrangThai,
  } = req.body;

  try {
    const result = await khachHangService.updateUser(MaKhachHang, {
      Email,
      HoTen,
      SoDienThoai,
      CCCD,
      DiaChi,
      GioiTinh,
      NgaySinh,
      TrangThai,
    });

    successHandler(res, "CẬP NHẬT KHÁCH HÀNG THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};
const deleteUsers = async (req, res, next) => {
  const { MaKhachHang } = req.params;

  try {
    const result = await khachHangService.deleteUserXoa(MaKhachHang);

    successHandler(res, "XÓA KHÁCH HÀNG THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUsers,
  deleteUsers,
};
