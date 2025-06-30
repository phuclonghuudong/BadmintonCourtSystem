const nhanVienService = require("../services/NhanVien.service");
const taiKhoanService = require("../services/TaiKhoan.service");
const nhomQuyenService = require("../services/NhomQuyen.service");
const authService = require("../services/Auth.service");
const { responseHandler } = require("../utils/responseHandler");
const { hashPassword, comparePassword } = require("../utils/bcrypt.util");
const generateAccessToken = require("../utils/getAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");
const {
  isValidEmail,
  isValidPhone,
  isValidPassword,
} = require("../utils/ValidateInput");

const loginAccount = async (req, res, next) => {
  let { Username, Password } = req.body;
  Username = Username?.trim();
  Password = Password?.trim();
  try {
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

const signupAccount = async (req, res, next) => {
  const roleCreate = process.env.ROLE_REGISTER_ACCOUNT;
  let { tenDangNhap, hoTen, email, soDienThoai, matKhau } = req.body;
  tenDangNhap = tenDangNhap?.replace(/\s+/g, "");
  email = email?.trim();
  soDienThoai = soDienThoai?.trim();
  matKhau = matKhau?.trim();
  hoTen = hoTen?.trim();
  try {
    if (!tenDangNhap || !hoTen || !email || !soDienThoai || !matKhau)
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );

    const checkValidEmail = await isValidEmail(email);
    if (!checkValidEmail)
      return responseHandler(res, 422, "EMAIL KHÔNG HỢP LỆ!", null, true);

    const checkValidPhone = await isValidPhone(soDienThoai);
    if (!checkValidPhone)
      return responseHandler(
        res,
        422,
        "SÔ ĐIỆN THOẠI KHÔNG HỢP LỆ!",
        null,
        true
      );

    const checkValidPassword = await isValidPassword(matKhau);
    if (!checkValidPassword)
      return responseHandler(
        res,
        422,
        "MẬT KHẨU KHÔNG HỢP LỆ. ÍT NHẤT 6 KÍ TỰ GỒM CHỮ VÀ SỐ!",
        null,
        true
      );

    const findByTenDangNhap =
      await taiKhoanService.findTaiKhoanByTenDangNhap(tenDangNhap);
    if (findByTenDangNhap)
      return responseHandler(res, 409, "TÊN ĐĂNG NHẬP ĐÃ TỒN TẠI!", null, true);

    const findByEmail = await nhanVienService.findByEmail(email);
    if (findByEmail)
      return responseHandler(res, 409, "EMAIL ĐÃ TỒN TẠI!", null, true);

    const findByPhone = await nhanVienService.findBySoDienThoai(soDienThoai);
    if (findByPhone)
      return responseHandler(res, 409, "SỐ ĐIỆN THOẠI ĐÃ TỒN TẠI!", null, true);

    const createNhanVien = await nhanVienService.createNhanVien({
      hoTen,
      email,
      soDienThoai,
    });
    const NhanVienID = createNhanVien?.id;
    const hashPass = await hashPassword(matKhau);

    if (createNhanVien) {
      const createTaiKhoan = await taiKhoanService.createTaiKhoan({
        nhanVienId: NhanVienID,
        tenDangNhap,
        nhomQuyenId: roleCreate,
        matKhau: hashPass,
        trangThai: 2,
      });

      if (createNhanVien) {
        responseHandler(res, 201, "TẠO TÀI KHOẢN THÀNH CÔNG", createTaiKhoan);
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAccount,
  signupAccount,
};
