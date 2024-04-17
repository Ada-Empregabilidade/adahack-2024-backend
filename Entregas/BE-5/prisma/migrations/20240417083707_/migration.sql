-- CreateTable
CREATE TABLE "Candidatos" (
    "id" TEXT NOT NULL,
    "nome" TEXT,
    "data_nascimento" TEXT,
    "telefone" TEXT,
    "email" TEXT,
    "etnia" TEXT,
    "genero" TEXT,
    "graduacao" TEXT,
    "senioridade" TEXT,
    "cidade" TEXT,
    "bairro" TEXT,
    "estado" TEXT,
    "pcd" BOOLEAN,
    "infos_tecnicas" TEXT[],
    "funcionario_interno" BOOLEAN,

    CONSTRAINT "Candidatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
