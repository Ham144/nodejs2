/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "token" SET DATA TYPE VARCHAR(100);

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Contact";

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(200),
    "phone" VARCHAR(20) NOT NULL,
    "userName" VARCHAR(100) NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adresses" (
    "id" SERIAL NOT NULL,
    "street" VARCHAR(50) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "province" VARCHAR(50) NOT NULL,
    "country" VARCHAR(20) NOT NULL,
    "postalCode" VARCHAR(8) NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adresses_contactId_key" ON "adresses"("contactId");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userName_fkey" FOREIGN KEY ("userName") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
