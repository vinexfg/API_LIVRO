/*
  Warnings:

  - You are about to drop the column `ano_de_publicacao` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `foto_path` on the `Livro` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    "descricao" TEXT,
    "avaliacao" REAL,
    "preco" REAL,
    "anoDePublicacao" INTEGER,
    "marca" TEXT,
    "isbn" TEXT,
    "fotoPath" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "Livro_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Livro" ("atualizadoEm", "autorId", "avaliacao", "criadoEm", "descricao", "id", "isbn", "marca", "preco", "titulo") SELECT "atualizadoEm", "autorId", "avaliacao", "criadoEm", "descricao", "id", "isbn", "marca", "preco", "titulo" FROM "Livro";
DROP TABLE "Livro";
ALTER TABLE "new_Livro" RENAME TO "Livro";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
