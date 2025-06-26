const successHandler = require("../utils/successHandler");
const errorHandler = require("../utils/errorHandler");
const TaiKhoanService = require("../services/TaiKhoan.service");
const NguoiDungService = require("../services/NguoiDung.service");

const registerUser = async (req, res, next) => {
  const {
    Email,
    HoTen,
    SoDienThoai,
    CCCD,
    DiaChi,
    GioiTinh,
    NgaySinh,
    Avatar,
    TenDangNhap,
    MatKhau,
    TrangThai,
  } = req.body;

  try {
    const errorMsg = validateInputRegister(req.body);
    if (errorMsg) return errorHandler(res, errorMsg, 400);

    const duplicateError = await checkDuplicateFields({
      Email,
      SoDienThoai,
      CCCD,
      TenDangNhap,
    });
    if (duplicateError) return errorHandler(res, duplicateError, 409);

    const resultNguoiDung = await NguoiDungService.createUser({
      Email,
      HoTen,
      SoDienThoai,
      CCCD,
      DiaChi,
      GioiTinh,
      NgaySinh,
      Avatar,
      TrangThai,
    });

    const IDNhanVien = resultNguoiDung.MaNguoiDung;
    const hashMatKhau = await hashPassword(MatKhau);

    const resultTaiKhoan = await TaiKhoanService.createTaiKhoan({
      MaNhanVien: IDNhanVien,
      TenDangNhap,
      MatKhau: hashMatKhau,
      TrangThai,
    });

    return successHandler(
      res,
      "THÊM MỚI NGƯỜI DÙNG THÀNH CÔNG!",
      { nguoiDung: resultNguoiDung, taiKhoan: resultTaiKhoan },
      201
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
};
