/*
  Warnings:

  - You are about to drop the column `eventPrice` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "eventPrice";

-- CreateTable
CREATE TABLE "EventPrice" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "priceType" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "EventPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventPrice" ADD CONSTRAINT "EventPrice_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
