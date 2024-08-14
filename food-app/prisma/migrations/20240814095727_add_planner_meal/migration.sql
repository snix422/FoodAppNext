-- CreateTable
CREATE TABLE "UserMeal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "meals" JSONB NOT NULL,

    CONSTRAINT "UserMeal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserMeal_userId_key" ON "UserMeal"("userId");

-- AddForeignKey
ALTER TABLE "UserMeal" ADD CONSTRAINT "UserMeal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
