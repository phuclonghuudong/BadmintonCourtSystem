const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lấy tất cả danh mục chức năng
const getAllDanhMucChucNang = async () => {
  return await prisma.danhmucchucnang.findMany();
};

// Tìm theo ID
const findById = async (id) => {
  return await prisma.danhmucchucnang.findUnique({
    where: { id: Number(id) },
  });
};
// Tìm theo Mã chức năng
const findByMaChucNang = async (id) => {
  return await prisma.danhmucchucnang.findUnique({
    where: { maChucNang: id },
  });
};

// Tìm theo ID
const checkExistMaChucNang = async (maChucNang, id) => {
  return await prisma.danhmucchucnang.findUnique({
    where: {
      maChucNang: maChucNang,
      NOT: {
        id: Number(id),
      },
    },
  });
};

// Tạo mới
const createDanhMucChucNang = async (data) => {
  return await prisma.danhmucchucnang.create({
    data: {
      ...data,
    },
  });
};
// Cập nhật
const updateDanhMucChucNang = async (id, data) => {
  return await prisma.danhmucchucnang.update({
    where: { id: Number(id) },
    data: data,
  });
};
// Xóa mềm
const deleteDanhMucChucNang = async (id) => {
  return await prisma.danhmucchucnang.update({
    where: { id: id },
    data: { TrangThai: -1 },
  });
};
// Xóa thật
const deleteData = async (id) => {
  return await prisma.danhmucchucnang.delete({
    where: { id: Number(id) },
  });
};

module.exports = {
  getAllDanhMucChucNang,
  findById,
  findByMaChucNang,
  checkExistMaChucNang,
  createDanhMucChucNang,
  updateDanhMucChucNang,
  deleteDanhMucChucNang,
};
