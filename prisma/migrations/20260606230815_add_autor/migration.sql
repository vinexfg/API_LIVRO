/*
  Warnings:

  - You are about to drop the column `autor` on the `Livro` table. All the data in the column will be lost.
  - Added the required column `ano_de_publicacao` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autorId` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avaliacao` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto_path` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Livro` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Autor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "avaliacao" REAL NOT NULL,
    "preco" REAL NOT NULL,
    "ano_de_publicacao" INTEGER NOT NULL,
    "isbn" TEXT NOT NULL,
    "foto_path" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Livro_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Livro" ("createdAt", "id", "titulo") SELECT "createdAt", "id", "titulo" FROM "Livro";
DROP TABLE "Livro";
ALTER TABLE "new_Livro" RENAME TO "Livro";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
