/*
  Warnings:

  - You are about to drop the column `content` on the `AboutUs` table. All the data in the column will be lost.
  - Added the required column `lognContent` to the `AboutUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortContent` to the `AboutUs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AboutUs" DROP COLUMN "content",
ADD COLUMN     "lognContent" TEXT NOT NULL,
ADD COLUMN     "shortContent" TEXT NOT NULL;
