const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllDanhMucChucNang = async () => {
  return await prisma.danhMucChucNang.findMany();
};

const getDanhMucChucNangById = async (id) => {
  return await prisma.danhMucChucNang.findUnique({
    where: { MaChucNang: id },
  });
};

const createDanhMucChucNang = async (data) => {
  const newID = await generateNewId();
  return await prisma.danhMucChucNang.create({
    data: {
      MaChucNang: newID,
      ...data,
    },
  });
};

const updateDanhMucChucNang = async (id, data) => {
  return await prisma.danhMucChucNang.update({
    where: { MaChucNang: id },
    data: data,
  });
};

const deleteDanhMucChucNang = async (id) => {
  return await prisma.danhMucChucNang.delete({
    where: { MaChucNang: id },
  });
};

const generateNewId = async () => {
  const last = await prisma.danhMucChucNang.findFirst({
    orderBy: {
      MaChucNang: "desc",
    },
  });

  if (!last) {
    return "CHUCNANG001";
  }

  const lastNumber = parseInt(last.MaChucNang.replace("CHUCNANG", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `CHUCNANG${newNumber}`;
};

module.exports = {
  getAllDanhMucChucNang,
  getDanhMucChucNangById,
  createDanhMucChucNang,
  updateDanhMucChucNang,
  deleteDanhMucChucNang,
};
