/*
  Warnings:

  - Added the required column `picture` to the `Foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Foods" ADD COLUMN     "picture" TEXT NOT NULL;
