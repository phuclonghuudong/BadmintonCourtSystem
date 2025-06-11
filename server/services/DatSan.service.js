const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lấy tất cả phiếu đặt sân (kèm khách hàng và sân)
const getAllDatSan = async () => {
  return await prisma.datSan.findMany({
    include: {
      San: true,
      KhachHang: true,
      ChiTietDatSan: {
        include: {
          SanPham: true,
        },
      },
    },
  });
};

// Lấy phiếu đặt sân theo ID
const getDatSanById = async (MaPhieuDatSan) => {
  return await prisma.datSan.findUnique({
    where: { MaPhieuDatSan },
    include: {
      San: true,
      KhachHang: true,
      ChiTietDatSan: {
        include: {
          SanPham: true,
        },
      },
    },
  });
};

// Tạo phiếu đặt sân mới
const createDatSan = async (data) => {
  return await prisma.datSan.create({
    data: {
      MaPhieuDatSan: data.MaPhieuDatSan,
      MaSan: data.MaSan,
      MaKhachHang: data.MaKhachHang,
      NgayDat: new Date(data.NgayDat),
      Checkin: new Date(data.Checkin),
      CheckOut: new Date(data.CheckOut),
      GiaSan: data.GiaSan,
      NgaySinh: data.NgaySinh ? new Date(data.NgaySinh) : null,
      TrangThai: data.TrangThai ?? true,
    },
  });
};

// Cập nhật phiếu đặt sân
const updateDatSan = async (MaPhieuDatSan, data) => {
  return await prisma.datSan.update({
    where: { MaPhieuDatSan },
    data,
  });
};

// Xóa phiếu đặt sân
const deleteDatSan = async (MaPhieuDatSan) => {
  return await prisma.datSan.delete({
    where: { MaPhieuDatSan },
  });
};

// Lấy danh sách đặt sân theo khách hàng
const getDatSanByKhachHang = async (MaKhachHang) => {
  return await prisma.datSan.findMany({
    where: { MaKhachHang },
    include: {
      San: true,
      ChiTietDatSan: true,
    },
  });
};

module.exports = {
  getAllDatSan,
  getDatSanById,
  createDatSan,
  updateDatSan,
  deleteDatSan,
  getDatSanByKhachHang,
};
