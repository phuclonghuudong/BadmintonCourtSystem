const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllKhungGio = async () => {
  return await prisma.khungGio.findMany({
    include: {
      GiaThue: true,
    },
  });
};

const getKhungGioById = async (id) => {
  return await prisma.khungGio.findUnique({
    where: { MaKhungGio: id },
    include: {
      GiaThue: true,
    },
  });
};

const createKhungGio = async (data) => {
  return await prisma.khungGio.create({
    data: {
      MaKhungGio: data.MaKhungGio,
      GioBatDau: data.GioBatDau,
      GioKetThuc: data.GioKetThuc,
      MoTa: data.MoTa || "",
      TrangThai: data.TrangThai ?? true,
    },
  });
};

const updateKhungGio = async (id, data) => {
  return await prisma.khungGio.update({
    where: { MaKhungGio: id },
    data,
  });
};

const deleteKhungGio = async (id) => {
  return await prisma.khungGio.delete({
    where: { MaKhungGio: id },
  });
};

module.exports = {
  getAllKhungGio,
  getKhungGioById,
  createKhungGio,
  updateKhungGio,
  deleteKhungGio,
};
