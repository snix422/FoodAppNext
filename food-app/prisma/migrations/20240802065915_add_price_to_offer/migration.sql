/*
  Warnings:

  - Made the column `price` on table `Offer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Offer" ALTER COLUMN "price" SET NOT NULL;
