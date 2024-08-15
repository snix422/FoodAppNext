/*
  Warnings:

  - You are about to drop the `UserMeal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserMeal" DROP CONSTRAINT "UserMeal_userId_fkey";

-- DropTable
DROP TABLE "UserMeal";

-- CreateTable
CREATE TABLE "userDiet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sniadanieId" INTEGER,
    "drugieSniadanieId" INTEGER,
    "obiadId" INTEGER,
    "kolacjeId" INTEGER,

    CONSTRAINT "userDiet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userDiet" ADD CONSTRAINT "userDiet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userDiet" ADD CONSTRAINT "userDiet_sniadanieId_fkey" FOREIGN KEY ("sniadanieId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userDiet" ADD CONSTRAINT "userDiet_drugieSniadanieId_fkey" FOREIGN KEY ("drugieSniadanieId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userDiet" ADD CONSTRAINT "userDiet_obiadId_fkey" FOREIGN KEY ("obiadId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userDiet" ADD CONSTRAINT "userDiet_kolacjeId_fkey" FOREIGN KEY ("kolacjeId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
