/*
  Warnings:

  - The primary key for the `Tickets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createDate` on the `Tickets` table. All the data in the column will be lost.
  - You are about to drop the column `numberLeft` on the `Tickets` table. All the data in the column will be lost.
  - Added the required column `qrCode` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "numbTickets" INTEGER,
ADD COLUMN     "toTickets" INTEGER;

-- AlterTable
ALTER TABLE "Tickets" DROP CONSTRAINT "Tickets_pkey",
DROP COLUMN "createDate",
DROP COLUMN "numberLeft",
ADD COLUMN     "qrCode" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tickets_id_seq";
