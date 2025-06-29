const taiKhoanService = require("../services/TaiKhoan.service");
const nhanVienService = require("../services/NhanVien.service");
const nhomQuyenService = require("../services/NhomQuyen.service");
const { responseHandler } = require("../utils/responseHandler");
const { isValidPassword } = require("../utils/ValidateInput");
const { hashPassword } = require("../utils/bcrypt.util");

const getAllTaiKhoan = async (req, res, next) => {
  try {
    const result = await taiKhoanService.getAllTaiKhoan();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TÀI KHOẢN", result);
  } catch (error) {
    next(error);
  }
};

const getAllTaiKhoanActive = async (req, res, next) => {
  try {
    const result = await taiKhoanService.getAllTaiKhoanActive();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TÀI KHOẢN", result);
  } catch (error) {
    next(error);
  }
};

const getTaiKhoanById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await taiKhoanService.findTaiKhoanById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "THÔNG TIN TÀI KHOẢN", result);
  } catch (error) {
    next(error);
  }
};

const createTaiKhoan = async (req, res, next) => {
  let { nhomQuyenId, nhanVienId, tenDangNhap, matKhau } = req.body;

  tenDangNhap = tenDangNhap?.trim().toLowerCase().replace(/\s+/g, "");
  matKhau = matKhau?.trim();
  try {
    if (!nhomQuyenId || !nhanVienId || !tenDangNhap || !matKhau)
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );

    const findNhanVien = await nhanVienService.findNhanVienById(nhanVienId);
    if (!findNhanVien)
      return responseHandler(res, 404, "NHÂN VIÊN KHÔNG TỒN TẠI", null, true);

    const findNhomQuyen = await nhomQuyenService.findNhomQuyenById(nhomQuyenId);
    if (!findNhomQuyen)
      return responseHandler(res, 404, "NHÓM QUYỀN KHÔNG TỒN TẠI", null, true);

    const checkExisTenDangNhap =
      await taiKhoanService.checkExistTenDangNhap(tenDangNhap);
    if (checkExisTenDangNhap)
      return responseHandler(res, 409, "TÊN ĐĂNG NHẬP ĐÃ TỒN TẠI!", null, true);

    const validMatKhau = isValidPassword(matKhau);
    if (!validMatKhau)
      return responseHandler(
        res,
        422,
        "MẬT KHẨU KHÔNG HỢP LỆ (ít nhất 6 kí tự cả chữ và số)!",
        null,
        true
      );

    const hashPass = await hashPassword(matKhau);
    const result = await taiKhoanService.createTaiKhoan({
      nhomQuyenId,
      nhanVienId,
      tenDangNhap,
      matKhau: hashPass,
    });
    if (!result) return responseHandler(res, 404, "LỖI!", null, true);

    responseHandler(res, 201, "TẠO TÀI KHOẢN THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTaiKhoan,
  getAllTaiKhoanActive,
  getTaiKhoanById,
  createTaiKhoan,
};
