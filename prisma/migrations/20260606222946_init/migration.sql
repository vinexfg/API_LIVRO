/*
  Warnings:

  - You are about to drop the column `ano_de_publicacao` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `avaliacao` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `data_atualizacao` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `data_criacao` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `foto_path` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `isbn` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Livro` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Livro" ("autor", "id", "titulo") SELECT "autor", "id", "titulo" FROM "Livro";
DROP TABLE "Livro";
ALTER TABLE "new_Livro" RENAME TO "Livro";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
