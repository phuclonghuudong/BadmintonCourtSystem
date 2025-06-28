/*
  Warnings:

  - You are about to drop the column `ten` on the `nhomquyen` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `nhomquyen` DROP COLUMN `ten`,
    ADD COLUMN `tenQuyen` VARCHAR(191) NULL;
