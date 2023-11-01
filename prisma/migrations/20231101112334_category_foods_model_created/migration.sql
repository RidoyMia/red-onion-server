-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foods" (
    "id" SERIAL NOT NULL,
    "categoryID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Foods_name_key" ON "Foods"("name");

-- AddForeignKey
ALTER TABLE "Foods" ADD CONSTRAINT "Foods_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
