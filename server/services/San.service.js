const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllSan = async () => {
  return await prisma.san.findMany({
    include: {
      LoaiSan: true,
      GiaThue: true,
    },
  });
};

const getSanById = async (id) => {
  return await prisma.san.findUnique({
    where: { MaSan: id },
    include: {
      LoaiSan: true,
      GiaThue: true,
      DatSan: true,
    },
  });
};

const createSan = async (data) => {
  return await prisma.san.create({
    data: {
      MaSan: data.MaSan,
      MaLoaiSan: data.MaLoaiSan,
      TenSan: data.TenSan,
      MoTa: data.MoTa,
      TrangThai: data.TrangThai ?? true,
    },
  });
};

const updateSan = async (id, data) => {
  return await prisma.san.update({
    where: { MaSan: id },
    data: {
      MaLoaiSan: data.MaLoaiSan,
      TenSan: data.TenSan,
      MoTa: data.MoTa,
      TrangThai: data.TrangThai,
    },
  });
};

const deleteSan = async (id) => {
  return await prisma.san.delete({
    where: { MaSan: id },
  });
};

module.exports = {
  getAllSan,
  getSanById,
  createSan,
  updateSan,
  deleteSan,
};
