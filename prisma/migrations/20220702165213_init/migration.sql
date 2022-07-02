-- CreateTable
CREATE TABLE "Memo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,

    CONSTRAINT "Memo_pkey" PRIMARY KEY ("id")
);
