/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `KhachHang` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[HoTen]` on the table `KhachHang` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[SoDienThoai]` on the table `KhachHang` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CCCD]` on the table `KhachHang` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `NguoiDung` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[HoTen]` on the table `NguoiDung` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[SoDienThoai]` on the table `NguoiDung` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CCCD]` on the table `NguoiDung` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[TenDangNhap]` on the table `TaiKhoan` will be added. If there are existing duplicate values, this will fail.
  - Made the column `CCCD` on table `nguoidung` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `nguoidung` MODIFY `CCCD` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `KhachHang_Email_key` ON `KhachHang`(`Email`);

-- CreateIndex
CREATE UNIQUE INDEX `KhachHang_HoTen_key` ON `KhachHang`(`HoTen`);

-- CreateIndex
CREATE UNIQUE INDEX `KhachHang_SoDienThoai_key` ON `KhachHang`(`SoDienThoai`);

-- CreateIndex
CREATE UNIQUE INDEX `KhachHang_CCCD_key` ON `KhachHang`(`CCCD`);

-- CreateIndex
CREATE UNIQUE INDEX `NguoiDung_Email_key` ON `NguoiDung`(`Email`);

-- CreateIndex
CREATE UNIQUE INDEX `NguoiDung_HoTen_key` ON `NguoiDung`(`HoTen`);

-- CreateIndex
CREATE UNIQUE INDEX `NguoiDung_SoDienThoai_key` ON `NguoiDung`(`SoDienThoai`);

-- CreateIndex
CREATE UNIQUE INDEX `NguoiDung_CCCD_key` ON `NguoiDung`(`CCCD`);

-- CreateIndex
CREATE UNIQUE INDEX `TaiKhoan_TenDangNhap_key` ON `TaiKhoan`(`TenDangNhap`);
