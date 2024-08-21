-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "mobileNo" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "worker" (
    "id" SERIAL NOT NULL,
    "mobileNo" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "worker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_mobileNo_key" ON "student"("mobileNo");

-- CreateIndex
CREATE UNIQUE INDEX "worker_mobileNo_key" ON "worker"("mobileNo");
