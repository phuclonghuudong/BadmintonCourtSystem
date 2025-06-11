const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
      MaNhanVien: data.MaNhanVien,
      MaNhomQuyen: data.MaNhomQuyen,
      TenDangNhap: data.TenDangNhap,
      MatKhau: data.MatKhau,
      TrangThai: data.TrangThai ?? true,
    },
  });
};

const updateTaiKhoan = async (id, data) => {
  return await prisma.taiKhoan.update({
    where: { MaNhanVien: id },
    data: {
      MaNhomQuyen: data.MaNhomQuyen,
      TenDangNhap: data.TenDangNhap,
      MatKhau: data.MatKhau,
      TrangThai: data.TrangThai,
    },
  });
};

const deleteTaiKhoan = async (id) => {
  return await prisma.taiKhoan.delete({
    where: { MaNhanVien: id },
  });
};

module.exports = {
  getAllTaiKhoan,
  createTaiKhoan,
  updateTaiKhoan,
  deleteTaiKhoan,
  getTaiKhoanById,
};
