/*
  Warnings:

  - You are about to drop the column `numbTickets` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `toTickets` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "numbTickets",
DROP COLUMN "toTickets";

-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "leftTickets" INTEGER,
ADD COLUMN     "soldTickets" INTEGER,
ADD COLUMN     "totalTickets" INTEGER;
