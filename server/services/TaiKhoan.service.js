const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllTaiKhoan = async () => {
  return await prisma.taiKhoan.findMany({
    include: {
      NhanVien: true,
      NhomQuyen: true,
    },
  });
};

const getTaiKhoanById = async (id) => {
  return await prisma.taiKhoan.findUnique({
    where: { Id: id },
    include: {
      NhanVien: true,
      NhomQuyen: true,
    },
  });
};

const createTaiKhoan = async (data) => {
  return await prisma.taiKhoan.create({
    data: {
      ...data,
    },
  });
};

module.exports = {
  getAllTaiKhoan,
  createTaiKhoan,
  updateTaiKhoan,
  deleteTaiKhoan,
  getTaiKhoanById,
};
