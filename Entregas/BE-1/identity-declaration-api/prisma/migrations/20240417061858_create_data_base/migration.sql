-- CreateTable
CREATE TABLE "age_groups" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "genders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ethnicities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "disabilities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "diversity_responses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ageGroupId" INTEGER NOT NULL,
    "genderId" INTEGER NOT NULL,
    "ethnicityId" INTEGER NOT NULL,
    "lgbtqia" BOOLEAN,
    "parent" BOOLEAN,
    "disabilityId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isInternalResponse" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "diversity_responses_ageGroupId_fkey" FOREIGN KEY ("ageGroupId") REFERENCES "age_groups" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "diversity_responses_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "diversity_responses_ethnicityId_fkey" FOREIGN KEY ("ethnicityId") REFERENCES "ethnicities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "diversity_responses_disabilityId_fkey" FOREIGN KEY ("disabilityId") REFERENCES "disabilities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "age_groups_code_key" ON "age_groups"("code");

-- CreateIndex
CREATE UNIQUE INDEX "genders_code_key" ON "genders"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ethnicities_code_key" ON "ethnicities"("code");

-- CreateIndex
CREATE UNIQUE INDEX "disabilities_code_key" ON "disabilities"("code");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
