const LoaiSanPhamService = require("../services/LoaiSanPham.service");
const successHandler = require("../utils/successHandler");

const getAllLoaiSanPham = async (req, res, next) => {
  try {
    const result = await LoaiSanPhamService.getAllLoaiSanPham();

    successHandler(res, "DANH SÁCH TẤT CẢ LOẠI SẢN PHẨM", result);
  } catch (error) {
    next(error);
  }
};

const getLoaiSanPhamById = async (req, res, next) => {
  const { MaLoaiSanPham } = req.params;

  try {
    const result = await LoaiSanPhamService.getLoaiSanPhamById(MaLoaiSanPham);

    successHandler(res, "THÔNG TIN LOẠI SẢN PHẨM!", result);
  } catch (error) {
    next(error);
  }
};

const addLoaiSanPham = async (req, res, next) => {
  const { TenLoaiSanPham, MoTa, TrangThai } = req.body;
  try {
    const result = await LoaiSanPhamService.createLoaiSanPham({
      TenLoaiSanPham,
      MoTa,
      TrangThai,
    });

    successHandler(res, "THÊM MỚI LOẠI SẢN PHẨM THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};

const updateLoaiSanPham = async (req, res, next) => {
  const { MaLoaiSanPham } = req.params;
  const { TenLoaiSanPham, MoTa, TrangThai } = req.body;

  try {
    const result = await LoaiSanPhamService.updateLoaiSanPham(MaLoaiSanPham, {
      TenLoaiSanPham,
      MoTa,
      TrangThai,
    });

    successHandler(res, "CẬP NHẬT LOẠI SẢN PHẨM THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const deleteLoaiSanPham = async (req, res, next) => {
  const { MaLoaiSanPham } = req.params;

  try {
    const result = await LoaiSanPhamService.deleteLoaiSanPhamXoa(MaLoaiSanPham);

    successHandler(res, "XÓA LOẠI SẢN PHẨM THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLoaiSanPham,
  getLoaiSanPhamById,
  addLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPham,
};
