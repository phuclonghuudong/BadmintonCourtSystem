const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DEFAULT_ROLE = process.env.DEFAULT_ROLE || "QUYEN000";

const getAllTaiKhoan = async () => {
  return await prisma.taiKhoan.findMany({
    include: {
      NguoiDung: true,
      NhomQuyen: true,
    },
  });
};

const getTaiKhoanById = async (id) => {
  return await prisma.taiKhoan.findUnique({
    where: { MaNhanVien: id },
    include: {
      NguoiDung: true,
      NhomQuyen: true,
    },
  });
};

const createTaiKhoan = async (data) => {
  return await prisma.taiKhoan.create({
    data: {
      MaNhomQuyen: DEFAULT_ROLE,
      ...data,
    },
  });
};

const updateTaiKhoan = async (id, data) => {
  return await prisma.taiKhoan.update({
    where: { MaNhanVien: id },
    data: {
      MaNhomQuyen: data.MaNhomQuyen,
      ...data,
    },
  });
};

const deleteTaiKhoan = async (id) => {
  return await prisma.taiKhoan.delete({
    where: { MaNhanVien: id },
  });
};

const findByUsername = async (username) => {
  return await prisma.taiKhoan.findUnique({ where: { TenDangNhap: username } });
};

const findByLoginValue = async ({ type, value }) => {
  const commonSelect = {
    MaNhanVien: true,
    MaNhomQuyen: true,
    MatKhau: true,
    TrangThai: true,
    RefreshToken: true,
    NguoiDung: {
      select: {
        MaNguoiDung: true,
        HoTen: true,
        Email: true,
        SoDienThoai: true,
        Avatar: true,
        GioiTinh: true,
        NgaySinh: true,
        DiaChi: true,
      },
    },
  };
  if (type === "Email") {
    return await prisma.taiKhoan.findFirst({
      where: {
        NguoiDung: {
          Email: value,
        },
      },
      select: commonSelect,
    });
  } else {
    return await prisma.taiKhoan.findFirst({
      where: {
        TenDangNhap: value,
      },
      select: commonSelect,
    });
  }
};

const updateRefreshToken = async (ID, refreshToken) => {
  return await prisma.taiKhoan.update({
    where: {
      MaNhanVien: ID,
    },
    data: {
      RefreshToken: refreshToken || null,
    },
  });
};

module.exports = {
  getAllTaiKhoan,
  createTaiKhoan,
  updateTaiKhoan,
  deleteTaiKhoan,
  getTaiKhoanById,
  findByUsername,
  findByLoginValue,
  updateRefreshToken,
};
