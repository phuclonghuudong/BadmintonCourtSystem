const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllNhomQuyen = async () => {
  return await prisma.nhomquyen.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

const findNhomQuyenById = async (id) => {
  return await prisma.nhomquyen.findUnique({
    where: {
      id: Number(id),
    },
  });
};
const findById = async (id) => {
  return await prisma.nhomquyen.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const findByMaQuyen = async (id) => {
  return await prisma.nhomquyen.findUnique({
    where: {
      maQuyen: id,
    },
  });
};

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
  findNhomQuyenById,
  findByMaQuyen,
  checkExistMaQuyen,
  createNhomQuyen,
  updateNhomQuyen,
  deleteNhomQuyen,
  deleteHardNhomQuyen,
};
