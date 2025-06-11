/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `NguoiDung` (
    `MaNguoiDung` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NULL,
    `HoTen` VARCHAR(191) NULL,
    `SoDienThoai` VARCHAR(191) NULL,
    `CCCD` VARCHAR(191) NULL,
    `DiaChi` VARCHAR(191) NULL,
    `GioiTinh` VARCHAR(191) NULL,
    `NgaySinh` DATETIME(3) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaNguoiDung`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaiKhoan` (
    `MaNhanVien` VARCHAR(191) NOT NULL,
    `MaNhomQuyen` VARCHAR(191) NOT NULL,
    `TenDangNhap` VARCHAR(191) NOT NULL,
    `MatKhau` VARCHAR(191) NOT NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaNhanVien`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NhomQuyen` (
    `MaNhomQuyen` VARCHAR(191) NOT NULL,
    `TenNhomQuyen` VARCHAR(191) NOT NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaNhomQuyen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DanhMucChucNang` (
    `MaChucNang` VARCHAR(191) NOT NULL,
    `TenChucNang` VARCHAR(191) NOT NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaChucNang`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChiTietQuyen` (
    `MaNhomQuyen` VARCHAR(191) NOT NULL,
    `MaChucNang` VARCHAR(191) NOT NULL,
    `HanhDong` VARCHAR(191) NOT NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaNhomQuyen`, `MaChucNang`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoaiSan` (
    `MaLoaiSan` VARCHAR(191) NOT NULL,
    `TenLoaiSan` VARCHAR(191) NOT NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaLoaiSan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `San` (
    `MaSan` VARCHAR(191) NOT NULL,
    `MaLoaiSan` VARCHAR(191) NOT NULL,
    `TenSan` VARCHAR(191) NOT NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaSan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KhungGio` (
    `MaKhungGio` VARCHAR(191) NOT NULL,
    `GioBatDau` VARCHAR(191) NOT NULL,
    `GioKetThuc` VARCHAR(191) NOT NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaKhungGio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GiaThue` (
    `MaGiaThue` VARCHAR(191) NOT NULL,
    `MaSan` VARCHAR(191) NOT NULL,
    `MaKhungGio` VARCHAR(191) NOT NULL,
    `ThuTrongTuan` VARCHAR(191) NOT NULL,
    `GiaTien` DOUBLE NOT NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaGiaThue`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KhachHang` (
    `MaKhachHang` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NULL,
    `HoTen` VARCHAR(191) NULL,
    `SoDienThoai` VARCHAR(191) NULL,
    `CCCD` VARCHAR(191) NULL,
    `DiaChi` VARCHAR(191) NULL,
    `GioiTinh` VARCHAR(191) NULL,
    `NgaySinh` DATETIME(3) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaKhachHang`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DatSan` (
    `MaPhieuDatSan` VARCHAR(191) NOT NULL,
    `MaSan` VARCHAR(191) NOT NULL,
    `MaKhachHang` VARCHAR(191) NOT NULL,
    `NgayDat` DATETIME(3) NOT NULL,
    `Checkin` DATETIME(3) NOT NULL,
    `CheckOut` DATETIME(3) NOT NULL,
    `GiaSan` DOUBLE NOT NULL,
    `NgaySinh` DATETIME(3) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaPhieuDatSan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoaiSanPham` (
    `MaLoaiSanPham` VARCHAR(191) NOT NULL,
    `TenLoaiSanPham` VARCHAR(191) NOT NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaLoaiSanPham`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SanPham` (
    `MaSanPham` VARCHAR(191) NOT NULL,
    `MaLoaiSanPham` VARCHAR(191) NOT NULL,
    `TenSanPham` VARCHAR(191) NOT NULL,
    `DonViTinh` VARCHAR(191) NULL,
    `HinhAnh` VARCHAR(191) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaSanPham`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChiTietDatSan` (
    `MaCTDS` VARCHAR(191) NOT NULL,
    `MaPhieuDatSan` VARCHAR(191) NOT NULL,
    `MaSanPham` VARCHAR(191) NOT NULL,
    `GiaBan` DOUBLE NOT NULL,
    `SoLuong` INTEGER NOT NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` BOOLEAN NULL,

    PRIMARY KEY (`MaCTDS`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TaiKhoan` ADD CONSTRAINT `TaiKhoan_MaNhanVien_fkey` FOREIGN KEY (`MaNhanVien`) REFERENCES `NguoiDung`(`MaNguoiDung`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaiKhoan` ADD CONSTRAINT `TaiKhoan_MaNhomQuyen_fkey` FOREIGN KEY (`MaNhomQuyen`) REFERENCES `NhomQuyen`(`MaNhomQuyen`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChiTietQuyen` ADD CONSTRAINT `ChiTietQuyen_MaNhomQuyen_fkey` FOREIGN KEY (`MaNhomQuyen`) REFERENCES `NhomQuyen`(`MaNhomQuyen`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChiTietQuyen` ADD CONSTRAINT `ChiTietQuyen_MaChucNang_fkey` FOREIGN KEY (`MaChucNang`) REFERENCES `DanhMucChucNang`(`MaChucNang`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `San` ADD CONSTRAINT `San_MaLoaiSan_fkey` FOREIGN KEY (`MaLoaiSan`) REFERENCES `LoaiSan`(`MaLoaiSan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GiaThue` ADD CONSTRAINT `GiaThue_MaSan_fkey` FOREIGN KEY (`MaSan`) REFERENCES `San`(`MaSan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GiaThue` ADD CONSTRAINT `GiaThue_MaKhungGio_fkey` FOREIGN KEY (`MaKhungGio`) REFERENCES `KhungGio`(`MaKhungGio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatSan` ADD CONSTRAINT `DatSan_MaSan_fkey` FOREIGN KEY (`MaSan`) REFERENCES `San`(`MaSan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatSan` ADD CONSTRAINT `DatSan_MaKhachHang_fkey` FOREIGN KEY (`MaKhachHang`) REFERENCES `KhachHang`(`MaKhachHang`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SanPham` ADD CONSTRAINT `SanPham_MaLoaiSanPham_fkey` FOREIGN KEY (`MaLoaiSanPham`) REFERENCES `LoaiSanPham`(`MaLoaiSanPham`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChiTietDatSan` ADD CONSTRAINT `ChiTietDatSan_MaPhieuDatSan_fkey` FOREIGN KEY (`MaPhieuDatSan`) REFERENCES `DatSan`(`MaPhieuDatSan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChiTietDatSan` ADD CONSTRAINT `ChiTietDatSan_MaSanPham_fkey` FOREIGN KEY (`MaSanPham`) REFERENCES `SanPham`(`MaSanPham`) ON DELETE RESTRICT ON UPDATE CASCADE;
