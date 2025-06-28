/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `khachhang` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cccd]` on the table `khachhang` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[soDienThoai]` on the table `khachhang` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `nhanvien` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cccd]` on the table `nhanvien` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[soDienThoai]` on the table `nhanvien` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `khachhang_email_key` ON `khachhang`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `khachhang_cccd_key` ON `khachhang`(`cccd`);

-- CreateIndex
CREATE UNIQUE INDEX `khachhang_soDienThoai_key` ON `khachhang`(`soDienThoai`);

-- CreateIndex
CREATE UNIQUE INDEX `nhanvien_email_key` ON `nhanvien`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `nhanvien_cccd_key` ON `nhanvien`(`cccd`);

-- CreateIndex
CREATE UNIQUE INDEX `nhanvien_soDienThoai_key` ON `nhanvien`(`soDienThoai`);
