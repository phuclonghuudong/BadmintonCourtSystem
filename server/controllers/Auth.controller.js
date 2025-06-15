const successHandler = require("../utils/successHandler");
const errorHandler = require("../utils/errorHandler");
const TaiKhoanService = require("../services/TaiKhoan.service");
const NguoiDungService = require("../services/NguoiDung.service");
const { hashPassword, comparePassword } = require("../utils/bcrypt.util");
const {
  isValidEmail,
  isValidPhone,
  isValidCCCD,
  isValidPassword,
  isValidBirthday,
} = require("../utils/ValidateInput");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateToken");

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

const loginUser = async (req, res, next) => {
  const { Username, Password } = req.body;

  if (!Username || !Password)
    return errorHandler(res, "Vui lòng nhập đầy đủ thông tin!", 400);

  try {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Username);

    const taiKhoan = await TaiKhoanService.findByLoginValue({
      type: isEmail ? "Email" : "TenDangNhap",
      value: Username,
    });

    if (!taiKhoan) return errorHandler(res, "Tài khoản không tồn tại!", 401);

    const isMatch = await comparePassword(Password, taiKhoan.MatKhau);

    if (!isMatch) {
      return errorHandler(
        res,
        "Mật khẩu không đúng hoặc tài khoản không đúng.",
        401
      );
    }

    if (taiKhoan.TrangThai === 0)
      return errorHandler(res, "Tài khoản đã bị khóa.", 403);

    if (taiKhoan.TrangThai == 2)
      return errorHandler(res, "Tài khoản chưa được xác nhận.", 401);

    const payload = {
      ID: taiKhoan.MaNhanVien,
      ROLE: taiKhoan.MaNhomQuyen,
      USERNAME: taiKhoan.NguoiDung.HoTen,
    };

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    const accessToken = await generateAccessToken(payload);
    const refreshToken = await generateRefreshToken(payload);
    await TaiKhoanService.updateRefreshToken(
      taiKhoan?.MaNhanVien,
      refreshToken
    );

    res.cookie("accessToken", accessToken, cookiesOption);
    res.cookie("refreshToken", refreshToken, cookiesOption);

    const {
      MatKhau,
      RefreshToken,
      ForgotPasswordOtp,
      ForgotPasswordExpiry,
      ...newTaiKhoan
    } = taiKhoan;

    return successHandler(res, "Đăng nhập thành công!", {
      USER: newTaiKhoan,
      ACCESS_TOKEN: accessToken,
      // REFRESH_TOKEN: refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    const refreshToken = req?.cookies?.refreshToken;
    const userId = req?.user?.ID;

    if (!refreshToken || !userId) {
      return errorHandler(res, "Không tìm thấy Tài khoản!", 400);
    }

    res.clearCookie("accessToken", cookiesOption);
    res.clearCookie("refreshToken", cookiesOption);

    await TaiKhoanService.updateRefreshToken(userId, "");

    return successHandler(res, "Đăng xuất thành công!");
  } catch (error) {
    next(error);
  }
};

const getDetailUser = async (req, res, next) => {
  try {
    const userID = req?.user?.ID;

    if (!userID) {
      return errorHandler(res, "Không tìm thấy Tài khoản!", 400);
    }

    const result = await TaiKhoanService.getTaiKhoanById(userID);

    const {
      MatKhau,
      RefreshToken,
      ForgotPasswordExpiry,
      ForgotPasswordOtp,
      ...newResult
    } = result;

    return successHandler(res, "THÔNG TIN NGƯỜI DÙNG", newResult);
  } catch (error) {
    next(error);
  }
};

const validateInputRegister = (data) => {
  const {
    Email,
    SoDienThoai,
    CCCD,
    NgaySinh,
    TenDangNhap,
    MatKhau,
    HoTen,
    ConfirmPassword,
  } = data;

  if (
    [
      Email,
      HoTen,
      SoDienThoai,
      CCCD,
      TenDangNhap,
      MatKhau,
      ConfirmPassword,
    ].some((v) => !v || v.trim() === "")
  )
    return "Vui lòng nhập đầy đủ các trường bắt buộc.";

  if (!isValidEmail(Email)) return "Email không hợp lệ.";

  if (!isValidPhone(SoDienThoai)) return "Số điện thoại không hợp lệ.";

  if (!isValidCCCD(CCCD)) return "CCCD phải có đúng 12 chữ số.";

  if (!isValidPassword(MatKhau))
    return "Mật khẩu phải có ít nhất 6 ký tự, gồm chữ và số.";

  if (NgaySinh && !isValidBirthday(NgaySinh))
    return "Ngày sinh không được lớn hơn ngày hiện tại.";

  if (MatKhau != ConfirmPassword) return "Mật khẩu không khớp!";

  return null;
};

const checkDuplicateFields = async ({
  Email,
  SoDienThoai,
  CCCD,
  TenDangNhap,
}) => {
  const existedEmail = await NguoiDungService.findByEmail(Email);
  if (existedEmail) return "Email đã tồn tại.";

  const existedPhone = await NguoiDungService.findByPhone(SoDienThoai);
  if (existedPhone) return "Số điện thoại đã tồn tại.";

  const existedCCCD = await NguoiDungService.findByCCCD(CCCD);
  if (existedCCCD) return "CCCD đã tồn tại.";

  const existedUsername = await TaiKhoanService.findByUsername(TenDangNhap);
  if (existedUsername) return "Tên đăng nhập đã tồn tại.";

  return null;
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getDetailUser,
};
