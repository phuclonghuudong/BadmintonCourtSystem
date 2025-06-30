const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const parseBirthday = async (value) => {
  const date = new Date(value);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const getAllNhanVien = async () => {
  return await prisma.nhanvien.findMany({
    include: {
      taikhoan: true,
    },
    orderBy: {
      id: "asc",
    },
  });
};

const getAllNhanVienActive = async () => {
  return await prisma.nhanvien.findMany({
    where: {
      trangThai: {
        not: -1,
      },
    },
    include: {
      taikhoan: true,
    },
    orderBy: {
      id: "asc",
    },
  });
};

const findNhanVienById = async (id) => {
  return await prisma.nhanvien.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      taikhoan: true,
    },
  });
};

const createNhanVien = async (data) => {
  const parsedNgaySinh = await parseBirthday(data.ngaySinh || "2000-01-01");
  return await prisma.nhanvien.create({
    data: {
      hoTen: data.hoTen,
      email: data.email,
      cccd: data.cccd,
      soDienThoai: data.soDienThoai,
      gioiTinh: Number(data.gioiTinh) ?? 1,
      diaChi: data.diaChi || null,
      ngaySinh: parsedNgaySinh,
      hinhAnh: data.hinhAnh || null,
      trangThai: Number(data.trangThai) || 1,
    },
  });
};

const updateNhanVien = async (id, data) => {
  const parsedNgaySinh = await parseBirthday(data.ngaySinh);
  return await prisma.nhanvien.update({
    where: { id: Number(id) },
    data: {
      hoTen: data.hoTen,
      email: data.email,
      cccd: data.cccd,
      soDienThoai: data.soDienThoai,
      gioiTinh: Number(data.gioiTinh),
      diaChi: data.diaChi,
      ngaySinh: parsedNgaySinh,
      hinhAnh: data.hinhAnh,
      trangThai: Number(data.trangThai),
    },
  });
};

const deleteNhanVien = async (id) => {
  return await prisma.nhanvien.update({
    where: { id: id },
    data: { trangThai: -1 },
  });
};

const findByEmail = async (email) => {
  return await prisma.nhanvien.findUnique({
    where: {
      email: email,
    },
  });
};

const findByCCCD = async (value) => {
  return await prisma.nhanvien.findUnique({
    where: {
      cccd: value,
    },
  });
};

const findBySoDienThoai = async (value) => {
  return await prisma.nhanvien.findUnique({
    where: {
      soDienThoai: value,
    },
  });
};

const checkExistEmail = async (email, id) => {
  return await prisma.nhanvien.findUnique({
    where: {
      email: email,
      NOT: {
        id: Number(id),
      },
    },
  });
};

const checkExistCCCD = async (cccd, id) => {
  return await prisma.nhanvien.findUnique({
    where: {
      cccd: cccd,
      NOT: {
        id: Number(id),
      },
    },
  });
};
const checkExistSoDienThoai = async (soDienThoai, id) => {
  return await prisma.nhanvien.findUnique({
    where: {
      soDienThoai: soDienThoai,
      NOT: {
        id: Number(id),
      },
    },
  });
};

// DELETE HARD
const deleteData = async (id) => {
  return await prisma.nhanvien.delete({
    where: { id: id },
  });
};

module.exports = {
  getAllNhanVien,
  getAllNhanVienActive,
  findNhanVienById,
  createNhanVien,
  updateNhanVien,
  deleteNhanVien,
  findByCCCD,
  findByEmail,
  findBySoDienThoai,
  checkExistCCCD,
  checkExistEmail,
  checkExistSoDienThoai,
};
