const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllTaiKhoan = async () => {
  return await prisma.nhanVien.findMany({
    include: {
      TaiKhoan: true,
    },
  });
};

const getTaiKhoanById = async (id) => {
  return await prisma.nhanVien.findUnique({
    where: { MaNhanVien: id },
    include: {
      TaiKhoan: true,
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

module.exports = {
  getAllTaiKhoan,
  createTaiKhoan,
  updateTaiKhoan,
  deleteTaiKhoan,
  getTaiKhoanById,
};
