/*
  Warnings:

  - You are about to drop the `Artist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Boost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categorie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventPrice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tickets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Boost" DROP CONSTRAINT "Boost_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Categorie" DROP CONSTRAINT "Categorie_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventPrice" DROP CONSTRAINT "EventPrice_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Tickets" DROP CONSTRAINT "Tickets_eventId_fkey";

-- DropTable
DROP TABLE "Artist";

-- DropTable
DROP TABLE "Boost";

-- DropTable
DROP TABLE "Categorie";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "EventPrice";

-- DropTable
DROP TABLE "Tickets";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";
