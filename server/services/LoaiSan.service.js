const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllLoaiSan = async () => {
  return await prisma.loaiSan.findMany();
};

const getLoaiSanById = async (id) => {
  return await prisma.loaiSan.findUnique({
    where: { MaLoaiSan: id },
  });
};

const createLoaiSan = async (data) => {
  return await prisma.loaiSan.create({
    data: data,
  });
};

const updateLoaiSan = async (id, data) => {
  return await prisma.loaiSan.update({
    where: { MaLoaiSan: id },
    data: data,
  });
};

const deleteLoaiSan = async (id) => {
  return await prisma.loaiSan.delete({
    where: { MaLoaiSan: parseInt(id) },
  });
};

module.exports = {
  getAllLoaiSan,
  getLoaiSanById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
};
