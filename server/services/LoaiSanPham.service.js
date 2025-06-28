const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllList = async () => {
  return await prisma.loaisanpham.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

const getAllListActive = async () => {
  return await prisma.loaisanpham.findMany({
    where: {
      trangThai: {
        not: -1,
      },
    },
    orderBy: {
      id: "asc",
    },
  });
};

const findById = async (id) => {
  return await prisma.loaisanpham.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const createLoaiSanPham = async (data) => {
  return await prisma.loaisanpham.create({
    data: {
      tenLoaiSanPham: data.tenLoaiSanPham,
      moTa: data.moTa,
      trangThai: data.trangThai ?? 1,
    },
  });
};

const updateLoaiSanPham = async (id, data) => {
  return await prisma.loaisanpham.update({
    where: {
      id: Number(id),
    },
    data: {
      tenLoaiSanPham: data.tenLoaiSanPham,
      moTa: data.moTa,
      trangThai: data.trangThai ?? 1,
    },
  });
};

const deleteLoaiSanPham = async (id) => {
  return await prisma.loaisanpham.update({
    where: {
      id: Number(id),
    },
    data: {
      trangThai: -1,
    },
  });
};

const deleteHardLoaiSanPham = async (id) => {
  return await prisma.loaisanpham.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getAllList,
  getAllListActive,
  findById,
  createLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPham,
};
