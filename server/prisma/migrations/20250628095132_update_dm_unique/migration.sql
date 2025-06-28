/*
  Warnings:

  - A unique constraint covering the columns `[maChucNang]` on the table `danhmucchucnang` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `danhmucchucnang_maChucNang_key` ON `danhmucchucnang`(`maChucNang`);
