const NhomQuyenService = require("../services/NhomQuyen.service");
const successHandler = require("../utils/successHandler");

const getAllNhomQuyen = async (req, res, next) => {
  try {
    const result = await NhomQuyenService.getAllNhomQuyen();

    successHandler(res, "DANH SÁCH TẤT CẢ NHÓM QUYỀN", result);
  } catch (error) {
    next(error);
  }
};

const getNhomQuyenById = async (req, res, next) => {
  const { MaNhomQuyen } = req.params;

  try {
    const result = await NhomQuyenService.getNhomQuyenById(MaNhomQuyen);

    successHandler(res, "THÔNG TIN CHI TIẾT NHÓM QUYỀN!", result);
  } catch (error) {
    next(error);
  }
};

const addNhomQuyen = async (req, res, next) => {
  const { TenNhomQuyen, TrangThai } = req.body;
  try {
    const result = await NhomQuyenService.createNhomQuyen({
      TenNhomQuyen,
      TrangThai,
    });

    successHandler(res, "THÊM MỚI NHÓM QUYỀN THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};
const updateNhomQuyen = async (req, res, next) => {
  const { MaNhomQuyen } = req.params;
  const { TenNhomQuyen, TrangThai } = req.body;

  try {
    const result = await NhomQuyenService.updateNhomQuyen(MaNhomQuyen, {
      TenNhomQuyen,
      TrangThai,
    });

    successHandler(res, "CẬP NHẬT NHÓM QUYỀN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};
const deleteNhomQuyen = async (req, res, next) => {
  const { MaNhomQuyen } = req.params;

  try {
    const result = await NhomQuyenService.deleteNhomQuyenXoa(MaNhomQuyen);

    successHandler(res, "XÓA NHÓM QUYỀN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNhomQuyen,
  getNhomQuyenById,
  addNhomQuyen,
  updateNhomQuyen,
  deleteNhomQuyen,
};
