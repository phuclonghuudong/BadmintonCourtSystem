const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lấy tất cả chi tiết đặt sân
const getAllChiTietDatSan = async () => {
  return await prisma.chiTietDatSan.findMany({
    include: {
      SanPham: true,
      DatSan: true,
    },
  });
};

// Lấy chi tiết đặt sân theo ID
const getChiTietDatSanById = async (MaCTDS) => {
  return await prisma.chiTietDatSan.findUnique({
    where: { MaCTDS },
    include: {
      SanPham: true,
      DatSan: true,
    },
  });
};

// Tạo mới chi tiết đặt sân
const createChiTietDatSan = async (data) => {
  return await prisma.chiTietDatSan.create({
    data: {
      MaCTDS: data.MaCTDS,
      MaPhieuDatSan: data.MaPhieuDatSan,
      MaSanPham: data.MaSanPham,
      GiaBan: data.GiaBan,
      SoLuong: data.SoLuong,
      MoTa: data.MoTa ?? "",
      TrangThai: data.TrangThai ?? true,
    },
  });
};

// Cập nhật chi tiết đặt sân
const updateChiTietDatSan = async (MaCTDS, data) => {
  return await prisma.chiTietDatSan.update({
    where: { MaCTDS },
    data,
  });
};

// Xóa chi tiết đặt sân
const deleteChiTietDatSan = async (MaCTDS) => {
  return await prisma.chiTietDatSan.delete({
    where: { MaCTDS },
  });
};

// Lấy danh sách sản phẩm theo mã phiếu đặt sân
const getChiTietByPhieuDatSan = async (MaPhieuDatSan) => {
  return await prisma.chiTietDatSan.findMany({
    where: { MaPhieuDatSan },
    include: {
      SanPham: true,
    },
  });
};

module.exports = {
  getAllChiTietDatSan,
  getChiTietDatSanById,
  createChiTietDatSan,
  updateChiTietDatSan,
  deleteChiTietDatSan,
  getChiTietByPhieuDatSan,
};
