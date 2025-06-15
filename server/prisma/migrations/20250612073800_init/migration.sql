/*
  Warnings:

  - You are about to drop the column `NgaySinh` on the `datsan` table. All the data in the column will be lost.
  - You are about to alter the column `GioiTinh` on the `khachhang` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `GioiTinh` on the `nguoidung` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `TrangThai` on table `chitietdatsan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `chitietquyen` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `danhmucchucnang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `datsan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `giathue` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Email` on table `khachhang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HoTen` on table `khachhang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SoDienThoai` on table `khachhang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CCCD` on table `khachhang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `khachhang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `khunggio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `loaisan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `loaisanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Email` on table `nguoidung` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HoTen` on table `nguoidung` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SoDienThoai` on table `nguoidung` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `nguoidung` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `nhomquyen` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `GiaSanPham` to the `SanPham` table without a default value. This is not possible if the table is not empty.
  - Made the column `DonViTinh` on table `sanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `sanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TrangThai` on table `taikhoan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `chitietdatsan` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `chitietquyen` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `danhmucchucnang` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `datsan` DROP COLUMN `NgaySinh`,
    ADD COLUMN `GhiChu` VARCHAR(191) NULL,
    ADD COLUMN `ThanhToan` VARCHAR(191) NULL,
    ADD COLUMN `TongTien` DOUBLE NULL,
    MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `giathue` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `khachhang` ADD COLUMN `GhiChu` VARCHAR(191) NULL,
    MODIFY `Email` VARCHAR(191) NOT NULL,
    MODIFY `HoTen` VARCHAR(191) NOT NULL,
    MODIFY `SoDienThoai` VARCHAR(191) NOT NULL,
    MODIFY `CCCD` VARCHAR(191) NOT NULL,
    MODIFY `GioiTinh` INTEGER NULL,
    MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `khunggio` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `loaisan` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `loaisanpham` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `nguoidung` MODIFY `Email` VARCHAR(191) NOT NULL,
    MODIFY `HoTen` VARCHAR(191) NOT NULL,
    MODIFY `SoDienThoai` VARCHAR(191) NOT NULL,
    MODIFY `GioiTinh` INTEGER NULL,
    MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `nhomquyen` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `san` MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sanpham` ADD COLUMN `GiaSanPham` DOUBLE NOT NULL,
    ADD COLUMN `MoTa` VARCHAR(191) NULL,
    MODIFY `DonViTinh` VARCHAR(191) NOT NULL,
    MODIFY `TrangThai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `taikhoan` MODIFY `TrangThai` INTEGER NOT NULL,
    MODIFY `VerifyEmail` BOOLEAN NULL;
