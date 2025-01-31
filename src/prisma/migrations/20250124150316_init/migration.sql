-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "creatorName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventName" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventLocate" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventPrice" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "priceType" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "EventPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boost" (
    "id" SERIAL NOT NULL,
    "boost" INTEGER,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "Boost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireDate" TIMESTAMP(3) NOT NULL,
    "numberLeft" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "artistName" TEXT NOT NULL,
    "genre" TEXT,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER,
    "userId" INTEGER,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "EventPrice" ADD CONSTRAINT "EventPrice_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boost" ADD CONSTRAINT "Boost_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categorie" ADD CONSTRAINT "Categorie_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
