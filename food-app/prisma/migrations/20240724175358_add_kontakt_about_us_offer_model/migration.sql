-- CreateTable
CREATE TABLE "Kontakt" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "adres" TEXT NOT NULL,

    CONSTRAINT "Kontakt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutUs" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AboutUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);
