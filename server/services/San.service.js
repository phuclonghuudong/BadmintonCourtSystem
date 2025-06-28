const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllSan = async () => {
  return await prisma.san.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      loaisan: true,
    },
  });
};

const getAllListActive = async () => {
  return await prisma.san.findMany({
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

const findSanById = async (id) => {
  return await prisma.san.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      loaisan: true,
    },
  });
};

const createSan = async (data) => {
  return await prisma.san.create({
    data: {
      loaiSanId: data.loaiSanId,
      tenSan: data.tenSan,
      giaSan: data.giaSan,
      moTa: data.moTa,
      hinhAnh: data.hinhAnh,
      trangThai: data.trangThai ?? 1,
    },
  });
};
const updateSan = async (id, data) => {
  return await prisma.san.update({
    where: {
      id: Number(id),
    },
    data: {
      loaiSanId: data.loaiSanId,
      tenSan: data.tenSan,
      giaSan: data.giaSan,
      moTa: data.moTa,
      hinhAnh: data.hinhAnh,
      trangThai: data.trangThai,
    },
  });
};

const deleteSan = async (id) => {
  return await prisma.san.update({
    where: {
      id: Number(id),
    },
    data: {
      trangThai: -1,
    },
  });
};

const deleteHardSan = async (id) => {
  return await prisma.san.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getAllSan,
  getAllListActive,
  findSanById,
  createSan,
  updateSan,
  deleteSan,
};
