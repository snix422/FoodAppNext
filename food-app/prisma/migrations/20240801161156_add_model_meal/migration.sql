-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('BREAKFAST', 'SECOND_BREAKFAST', 'LUNCH', 'DINNER');

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "kcal" INTEGER NOT NULL,
    "carbohydrates" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "preparation" TEXT NOT NULL,
    "ingredients" TEXT[],
    "type" "MealType" NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);
