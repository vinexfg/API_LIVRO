-- CreateTable
CREATE TABLE "Livro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "autor" TEXT NOT NULL,
    "avaliacao" REAL,
    "preco" DECIMAL,
    "ano_de_publicacao" INTEGER,
    "marca" TEXT,
    "isbn" TEXT,
    "foto_path" TEXT,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Livro_isbn_key" ON "Livro"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "Livro_foto_path_key" ON "Livro"("foto_path");
