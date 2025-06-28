const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lấy tất cả nhóm quyền
const getAllNhomQuyen = async () => {
  return await prisma.nhomquyen.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

// Lấy nhóm quyền theo ID
const findById = async (id) => {
  return await prisma.nhomquyen.findUnique({
    where: {
      id: Number(id),
    },
  });
};

// Lấy mã quyền
const findByMaQuyen = async (id) => {
  return await prisma.nhomquyen.findUnique({
    where: {
      maQuyen: id,
    },
  });
};

// Kiểm tra tồn tại của mã Quyền ngoại trừ vị trí hiện tại
const checkExistMaQuyen = async (maQuyen, id) => {
  return await prisma.nhomquyen.findUnique({
    where: {
      maQuyen: maQuyen,
      NOT: {
        id: Number(id),
      },
    },
  });
};

// Tạo nhóm quyền mới
const createNhomQuyen = async (data) => {
  return await prisma.nhomquyen.create({
    data: {
      maQuyen: data.maQuyen,
      tenQuyen: data.tenQuyen,
      moTa: data.moTa,
      trangThai: data.trangThai ?? 1,
    },
  });
};

// Cập nhật nhóm quyền
const updateNhomQuyen = async (id, data) => {
  return await prisma.nhomquyen.update({
    where: {
      id: Number(id),
    },
    data: {
      maQuyen: data.maQuyen,
      tenQuyen: data.tenQuyen,
      moTa: data.moTa,
      trangThai: data.trangThai,
    },
  });
};

// Xóa mềm (đổi trạng thái)
const deleteNhomQuyen = async (id) => {
  return await prisma.nhomquyen.update({
    where: {
      id: Number(id),
    },
    data: {
      trangThai: -1,
    },
  });
};

// Xóa hẳn
const deleteHardNhomQuyen = async (id) => {
  return await prisma.nhomquyen.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getAllNhomQuyen,
  findById,
  findByMaQuyen,
  checkExistMaQuyen,
  createNhomQuyen,
  updateNhomQuyen,
  deleteNhomQuyen,
  deleteHardNhomQuyen,
};
