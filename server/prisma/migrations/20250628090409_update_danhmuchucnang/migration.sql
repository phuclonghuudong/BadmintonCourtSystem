/*
  Warnings:

  - You are about to drop the column `tenDanhMuc` on the `danhmucchucnang` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `danhmucchucnang` DROP COLUMN `tenDanhMuc`,
    ADD COLUMN `tenChucNang` VARCHAR(191) NULL;
