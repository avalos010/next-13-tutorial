-- CreateTable
CREATE TABLE "User" (
    "_id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "name" STRING,
    "imageUrl" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
