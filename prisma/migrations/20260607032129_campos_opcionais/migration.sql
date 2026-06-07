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
    "ano_de_publicacao" INTEGER,
    "isbn" TEXT,
    "foto_path" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "Livro_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Livro" ("ano_de_publicacao", "atualizadoEm", "autorId", "avaliacao", "criadoEm", "descricao", "foto_path", "id", "isbn", "preco", "titulo") SELECT "ano_de_publicacao", "atualizadoEm", "autorId", "avaliacao", "criadoEm", "descricao", "foto_path", "id", "isbn", "preco", "titulo" FROM "Livro";
DROP TABLE "Livro";
ALTER TABLE "new_Livro" RENAME TO "Livro";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
