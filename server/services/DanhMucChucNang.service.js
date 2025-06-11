const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllDanhMucChucNang = async () => {
  return await prisma.danhMucChucNang.findMany();
};

const getDanhMucChucNangById = async (id) => {
  return await prisma.danhMucChucNang.findUnique({
    where: { MaChucNang: id },
  });
};

const createDanhMucChucNang = async (data) => {
  return await prisma.danhMucChucNang.create({
    data: data,
  });
};

const updateDanhMucChucNang = async (id, data) => {
  return await prisma.danhMucChucNang.update({
    where: { MaChucNang: id },
    data: data,
  });
};

const deleteDanhMucChucNang = async (id) => {
  return await prisma.danhMucChucNang.delete({
    where: { MaChucNang: id },
  });
};

module.exports = {
  getAllDanhMucChucNang,
  getDanhMucChucNangById,
  createDanhMucChucNang,
  updateDanhMucChucNang,
  deleteDanhMucChucNang,
};
