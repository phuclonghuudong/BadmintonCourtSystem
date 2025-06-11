const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllGiaThue = async () => {
  return await prisma.giaThue.findMany({
    include: {
      San: true,
      KhungGio: true,
    },
  });
};

const getGiaThueById = async (MaGiaThue) => {
  return await prisma.giaThue.findUnique({
    where: { MaGiaThue },
    include: {
      San: true,
      KhungGio: true,
    },
  });
};

const createGiaThue = async (data) => {
  return await prisma.giaThue.create({
    data: {
      MaGiaThue: data.MaGiaThue,
      MaSan: data.MaSan,
      MaKhungGio: data.MaKhungGio,
      ThuTrongTuan: data.ThuTrongTuan,
      GiaTien: data.GiaTien,
      MoTa: data.MoTa || "",
      TrangThai: data.TrangThai ?? true,
    },
  });
};

const updateGiaThue = async (MaGiaThue, data) => {
  return await prisma.giaThue.update({
    where: { MaGiaThue },
    data,
  });
};

const deleteGiaThue = async (MaGiaThue) => {
  return await prisma.giaThue.delete({
    where: { MaGiaThue },
  });
};

const getGiaThueBySanKhungGioThu = async (MaSan, MaKhungGio, ThuTrongTuan) => {
  return await prisma.giaThue.findFirst({
    where: {
      MaSan,
      MaKhungGio,
      ThuTrongTuan,
      TrangThai: true,
    },
  });
};

module.exports = {
  getAllGiaThue,
  getGiaThueById,
  createGiaThue,
  updateGiaThue,
  deleteGiaThue,
  getGiaThueBySanKhungGioThu,
};
