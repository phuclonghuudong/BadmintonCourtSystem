const nhanVienService = require("../services/NhanVien.service");
const taiKhoanService = require("../services/TaiKhoan.service");
const nhomQuyenService = require("../services/NhomQuyen.service");
const authService = require("../services/Auth.service");
const { responseHandler } = require("../utils/responseHandler");
const { hashPassword, comparePassword } = require("../utils/bcrypt.util");
const generateAccessToken = require("../utils/generateAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");
const {
  isValidEmail,
  isValidPhone,
  isValidPassword,
} = require("../utils/ValidateInput");
const generateOtp = require("../utils/generateOtp");
const sendEmail = require("../config/sendMail");
const VerifyEmailTemplate = require("../utils/verifyEmailTemplate");

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
      ID: checkUsername.id,
      MSNV: checkUsername.nhanVienId,
      ROLE: checkUsername.nhomQuyenId,
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
      USER: {
        id: checkUsername?.id,
        hoTen: checkUsername?.nhanvien?.hoTen,
        email: checkUsername?.nhanvien?.email,
        role: checkUsername?.nhomquyen?.maQuyen,
        tenQuyen: checkUsername?.nhomquyen?.tenQuyen,
      },
      ACCESS_TOKEN: accessToken,
    });
  } catch (error) {
    next(error);
  }
};

const signupAccount = async (req, res, next) => {
  const roleCreate = process.env.ROLE_REGISTER_ACCOUNT || "KHACH";

  let { tenDangNhap, hoTen, email, soDienThoai, matKhau } = req.body;
  tenDangNhap = tenDangNhap?.replace(/\s+/g, "");
  email = email?.trim();
  soDienThoai = soDienThoai?.trim();
  matKhau = matKhau?.trim();
  hoTen = hoTen?.trim();

  try {
    if (!roleCreate)
      return responseHandler(res, 400, "Chưa có nhóm qyền!", null, true);

    if (!tenDangNhap || !hoTen || !email || !soDienThoai || !matKhau)
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );

    const findNhomQuyenId = await nhomQuyenService.findByMaQuyen(roleCreate);
    if (!findNhomQuyenId)
      return responseHandler(res, 422, "NHÓM QUYỀN KHÔNG HỢP LỆ!", null, true);

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
      trangThai: 2,
    });
    const NhanVienID = createNhanVien?.id;
    const NhomQuyenID = findNhomQuyenId?.id;
    const hashPass = await hashPassword(matKhau);

    if (createNhanVien) {
      const createTaiKhoan = await taiKhoanService.createTaiKhoan({
        nhanVienId: NhanVienID,
        tenDangNhap,
        nhomQuyenId: NhomQuyenID,
        matKhau: hashPass,
        trangThai: 2,
      });

      const findAccount = await taiKhoanService.findTaiKhoanById(
        createTaiKhoan?.id
      );
      if (!findAccount)
        return responseHandler(res, 409, "TẠO TÀI KHOẢN THẤT BẠI!", null, true);

      const payload = {
        ID: findAccount.id,
        MSNV: findAccount.nhanVienId,
        ROLE: findAccount.nhomQuyenId,
        EMAIL: findAccount.nhanvien.email,
      };

      const cookiesOption = {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      };

      const accessToken = await generateAccessToken(payload);
      const refreshToken = await generateRefreshToken(payload);

      if (refreshToken !== null) {
        await authService.updateRefreshToken(findAccount?.id, refreshToken);
      }

      res.cookie("accessToken", accessToken, cookiesOption);
      res.cookie("refreshToken", refreshToken, cookiesOption);

      responseHandler(res, 201, "TẠO TÀI KHOẢN THÀNH CÔNG", {
        USER: {
          id: findAccount?.id,
          hoTen: findAccount?.nhanvien?.hoTen,
          email: findAccount?.nhanvien?.email,
          role: findAccount?.nhomquyen?.maQuyen,
          tenQuyen: findAccount?.nhomquyen?.tenQuyen,
        },
        ACCESS_TOKEN: accessToken,
      });
    }
  } catch (error) {
    next(error);
  }
};

const verifyEmail = async (req, res, next) => {
  const { Email } = req.body;
  try {
    if (!Email)
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );

    const validEmail = await isValidEmail(Email);
    if (!validEmail)
      return responseHandler(
        res,
        422,
        "EMAIL KHÔNG ĐÚNG ĐỊNH DẠNG!",
        null,
        true
      );

    const findByEmail = await nhanVienService.findByEmail(Email);
    if (!findByEmail)
      return responseHandler(res, 422, "EMAIL KHÔNG TỒN TẠI!", null, true);

    if (findByEmail?.trangThai === -1)
      return responseHandler(res, 404, "TÀI KHOẢN KHÔNG TỒN TẠI.", null, true);

    if (findByEmail?.trangThai === 0)
      return responseHandler(res, 403, "TÀI KHOẢN ĐÃ BỊ KHÓA.", null, true);

    if (findByEmail?.trangThai === 2)
      return responseHandler(
        res,
        401,
        "TÀI KHOẢN CHƯA ĐƯỢC XÁC NHẬN.",
        null,
        true
      );

    const otp = generateOtp();
    const expireTime = new Date(Date.now() + 3 * 60 * 1000);

    const findByNhanVienId = await taiKhoanService.findTaiKhoanByNhanVienId(
      findByEmail?.id
    );

    if (!findByNhanVienId.id)
      return responseHandler(res, 404, "TÀI KHOẢN KHÔNG TỒN TẠI.", null, true);

    const updateVerifyEmailTaiKhoan =
      await taiKhoanService.updateVerifyEmailResetPassword(
        findByNhanVienId?.id,
        {
          emailDaXacThuc: true,
          otpQuenMatKhau: otp,
          otpHetHanLuc: expireTime,
        }
      );

    await sendEmail({
      sendTo: findByEmail?.email,
      subject: "Forgot password from Badminton Court System",
      html: VerifyEmailTemplate({
        name: findByEmail?.hoTen,
        otp: otp,
      }),
    });

    responseHandler(
      res,
      200,
      "XÁC NHẬN EMAIL THÀNH CÔNG. VUI LÒNG KIỂM TRA EMAIL!"
    );
  } catch (error) {
    next(error);
  }
};

const otpVerification = async (req, res, next) => {
  const { Email, Otp } = req.body;
  try {
    if (!Email || !Otp || Otp.length !== 6)
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );

    const findByEmail = await nhanVienService.findByEmail(Email);
    const NhanVienID = findByEmail?.id;

    if (!NhanVienID)
      return responseHandler(res, 404, "TÀI KHOẢN KHÔNG TỒN TẠI.", null, true);

    const findTaiKhoanByNhanVienId =
      await taiKhoanService.findTaiKhoanByNhanVienId(NhanVienID);
    if (!findTaiKhoanByNhanVienId)
      return responseHandler(res, 404, "TÀI KHOẢN KHÔNG TỒN TẠI.", null, true);

    const currentTime = new Date();
    const otpExpiry = findTaiKhoanByNhanVienId?.otpHetHanLuc;
    const otpResetPassword = findTaiKhoanByNhanVienId?.otpQuenMatKhau;
    const TaiKhoanID = findTaiKhoanByNhanVienId?.id;

    if (!otpExpiry || otpExpiry < currentTime)
      return responseHandler(res, 400, "OTP ĐÃ HẾT HẠN.", null, true);

    if (otpResetPassword !== Otp)
      return responseHandler(
        res,
        400,
        "MÃ XÁC THỰC KHÔNG ĐÚNG HOẶC ĐÃ HẾT HẠN.",
        null,
        true
      );

    await taiKhoanService.updateVerifyOTPResetPassword(TaiKhoanID, {
      emailDaXacThuc: false,
      otpQuenMatKhau: "",
      otpHetHanLuc: "",
    });

    responseHandler(
      res,
      200,
      "XÁC NHẬN OTP THÀNH CÔNG. VUI LÒNG ĐỔI MẬT KHẨU CỦA BẠN"
    );
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  const { matKhau, confirmMatKhau, email } = req.body;
  try {
    if (!matKhau || !confirmMatKhau || !email)
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    if (matKhau !== confirmMatKhau)
      return responseHandler(
        res,
        400,
        "Mật khẩu và nhập lại mật khẩu không đúng!",
        null,
        true
      );

    const findByEmail = await nhanVienService.findByEmail(email);
    const NhanVienID = findByEmail?.id;

    if (!NhanVienID)
      return responseHandler(res, 404, "TÀI KHOẢN KHÔNG TỒN TẠI.", null, true);

    const findTaiKhoanByNhanVienId =
      await taiKhoanService.findTaiKhoanByNhanVienId(NhanVienID);
    if (!findTaiKhoanByNhanVienId)
      return responseHandler(res, 404, "TÀI KHOẢN KHÔNG TỒN TẠI.", null, true);

    const checkValidPassword = await isValidPassword(matKhau);
    if (!checkValidPassword)
      return responseHandler(
        res,
        422,
        "MẬT KHẨU KHÔNG HỢP LỆ. ÍT NHẤT 6 KÍ TỰ GỒM CHỮ VÀ SỐ!",
        null,
        true
      );

    const hashPass = await hashPassword(matKhau);

    const result = await taiKhoanService.updateResetPassword(
      findTaiKhoanByNhanVienId?.id,
      {
        matKhau: hashPass,
      }
    );
    if (!result)
      return responseHandler(res, 409, "ĐỔI MẬT KHẨU THẤT BẠI!", null, true);

    responseHandler(res, 200, "ĐỔI MẬT KHẨU THÀNH CÔNG.");
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (res, req, next) => {
  try {
    const token = req.cookies?.refreshToken;
    const secretKey = process.env.SECRET_KEY_REFRESH_TOKEN || "secret key";
    if (!token)
      return responseHandler(res, 401, "KHÔNG CÓ REFRESH TOKEN!", null, true);

    const decoded = jwt.verify(token, secretKey);
    const userId = decoded?.ID;

    if (!userId)
      return responseHandler(res, 403, "Token không hợp lệ!", null, true);

    const user = await taiKhoanService.findTaiKhoanById(userId);
    if (!user || user?.refreshToken !== token) {
      return responseHandler(res, 403, "Refresh token không đúng!", null, true);
    }

    const payload = {
      ID: user.id,
      MSNV: user.nhanVienId,
      ROLE: user.nhomQuyenId,
    };

    const newAccessToken = await generateAccessToken(payload);
    const newRefreshToken = await generateRefreshToken(payload);

    await taiKhoanService.updateRefreshToken(userId, newRefreshToken);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.cookie("accessToken", newAccessToken, cookiesOption);
    res.cookie("refreshToken", newRefreshToken, cookiesOption);

    return successHandler(res, 200, "LÀM MỚI THÀNH CÔNG!", {
      ACCESS_TOKEN: newAccessToken,
      // REFRESH_TOKEN: newRefreshToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAccount,
  signupAccount,
  verifyEmail,
  otpVerification,
  resetPassword,
  refreshToken,
};
