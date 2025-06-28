const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lấy tất cả bản ghi
const getAllChiTietQuyen = async () => {
  return await prisma.chitietquyen.findMany({
    include: {
      danhmucchucnang: true,
      nhomquyen: true,
    },
  });
};

//  Tạo mới
const createChiTietQuyen = async (data) => {
  return await prisma.chitietquyen.create({
    data: {
      MaChucNang: data.MaChucNang,
      MaNhomQuyen: data.MaNhomQuyen,
      HanhDong: data.HanhDong || null,
      MoTa: data.MoTa,
      TrangThai: data.TrangThai,
    },
  });
};

//  Tìm theo ID
const findChiTietQuyenById = async (id) => {
  return await prisma.chitietquyen.findUnique({
    where: { ID: Number(id) },
    include: {
      danhmucchucnang: true,
      nhomquyen: true,
    },
  });
};

// Cập nhật
const updateChiTietQuyen = async (id, data) => {
  return await prisma.chitietquyen.update({
    where: { ID: Number(id) },
    data: {
      MaChucNang: data.MaChucNang,
      MaNhomQuyen: data.MaNhomQuyen,
      HanhDong: data.HanhDong || null,
      MoTa: data.MoTa,
      TrangThai: data.TrangThai,
    },
  });
};

// Xóa mềm (đặt TrangThai = -1)
const softDeleteChiTietQuyen = async (id) => {
  return await prisma.chitietquyen.update({
    where: { ID: Number(id) },
    data: {
      TrangThai: -1,
    },
  });
};

// Xóa thật (cẩn thận)
const deleteChiTietQuyen = async (id) => {
  return await prisma.chitietquyen.delete({
    where: { ID: Number(id) },
  });
};

module.exports = {
  getAllChiTietQuyen,
  createChiTietQuyen,
  findChiTietQuyenById,
  updateChiTietQuyen,
  softDeleteChiTietQuyen,
  deleteChiTietQuyen,
};
