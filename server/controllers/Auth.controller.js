const nhanVienService = require("../services/NhanVien.service");
const taiKhoanService = require("../services/TaiKhoan.service");
const nhomQuyenService = require("../services/NhomQuyen.service");
const authService = require("../services/Auth.service");
const { responseHandler } = require("../utils/responseHandler");
const { hashPassword, comparePassword } = require("../utils/bcrypt.util");
const generateAccessToken = require("../utils/getAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");

const loginAccount = async (req, res, next) => {
  let { Username, Password } = req.body;
  Username = Username?.trim();
  Password = Password?.trim();
  try {
    console.log("CHECK: ", Username, Password);
    if (!Username || !Password)
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Username);
    const checkUsername = await authService.findAccountByValueInput({
      type: isEmail ? "EMAIL" : "TENDANGNHAP",
      value: Username,
    });
    if (!checkUsername)
      return responseHandler(
        res,
        404,
        "MẬT KHẨU HOẶC TÀI KHOẢN KHÔNG ĐÚNG!",
        null,
        true
      );

    const isMatch = await comparePassword(Password, checkUsername?.matKhau);

    if (!isMatch) {
      return responseHandler(
        res,
        401,
        "MẬT KHẨU HOẶC TÀI KHOẢN KHÔNG ĐÚNG.",
        null,
        true
      );
    }

    if (checkUsername?.trangThai === -1)
      return responseHandler(res, 404, "TÀI KHOẢN KHÔNG TỒN TẠI.", null, true);

    if (checkUsername?.trangThai === 0)
      return responseHandler(res, 403, "TÀI KHOẢN ĐÃ BỊ KHÓA.", null, true);

    if (checkUsername?.trangThai === 2)
      return responseHandler(
        res,
        401,
        "TÀI KHOẢN CHƯA ĐƯỢC XÁC NHẬN.",
        null,
        true
      );
    const payload = {
      ID: checkUsername.nhanVienId,
      ROLE: checkUsername.nhomQuyenId,
      PERMISSION: checkUsername.nhomquyen.maQuyen,
      USERNAME: checkUsername.nhanvien.hoTen,
    };

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    const accessToken = await generateAccessToken(payload);
    const refreshToken = await generateRefreshToken(payload);

    if (refreshToken !== null) {
      await authService.updateRefreshToken(checkUsername?.id, refreshToken);
    }

    res.cookie("accessToken", accessToken, cookiesOption);
    res.cookie("refreshToken", refreshToken, cookiesOption);

    return responseHandler(res, 200, "ĐĂNG NHẬP THÀNH CÔNG.", {
      ACCESS_TOKEN: accessToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAccount,
};
