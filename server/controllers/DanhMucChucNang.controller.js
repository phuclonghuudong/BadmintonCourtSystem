const successHandler = require("../utils/successHandler");
const errorHandler = require("../utils/errorHandler");
const DMCNService = require("../services/DanhMucChucNang.service");

const getAllChucNang = async (req, res, next) => {
  try {
    const result = await DMCNService.getAllDanhMucChucNang();
    successHandler(res, "DANH SÁCH TẤT CẢ CHỨC NĂNG", result);
  } catch (error) {
    next(error);
  }
};
const getChucNangById = async (req, res, next) => {
  const { MaChucNang } = req.params;
  try {
    const result = await DMCNService.getDanhMucChucNangById(MaChucNang);
    if (!result) return errorHandler(res, "KHÔNG TÌM THẤY DANH MỤC!", 403);
    successHandler(res, "CHỨC NĂNG THEO ID", result);
  } catch (error) {
    next(error);
  }
};

const createChucNang = async (req, res, next) => {
  const { TenChucNang, TrangThai } = req.body;

  if (!TenChucNang) return errorHandler(res, "Vui lòng nhập đầy đủ thông tin.");
  try {
    const result = await DMCNService.createDanhMucChucNang({
      TenChucNang,
      TrangThai,
    });

    successHandler(res, "THÊM MỚI DANH MỤC THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};
const updateChucNang = async (req, res, next) => {
  const { TenChucNang, TrangThai } = req.body;
  const { MaChucNang } = req.params;

  if (!TenChucNang) return errorHandler(res, "Vui lòng nhập đầy đủ thông tin.");
  try {
    const findId = await DMCNService.findDanhMucChucNangById(MaChucNang);
    if (!findId) return errorHandler(res, "KHÔNG TÌM THẤY DANH MỤC!", 403);

    const result = await DMCNService.updateDanhMucChucNang(MaChucNang, {
      TenChucNang,
      TrangThai,
    });
    successHandler(res, "CẬP NHẬT DANH MỤC THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};
const deleteChucNang = async (req, res, next) => {
  const { MaChucNang } = req.params;

  try {
    const findId = await DMCNService.findDanhMucChucNangById(MaChucNang);
    if (!findId) return errorHandler(res, "KHÔNG TÌM THẤY DANH MỤC!", 403);

    const result = await DMCNService.deleteDanhMucChucNangXoa(MaChucNang);
    successHandler(res, "XÓA DANH MỤC THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllChucNang,
  getChucNangById,
  createChucNang,
  updateChucNang,
  deleteChucNang,
};
