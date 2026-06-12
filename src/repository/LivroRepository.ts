import prisma from "../prisma.js";
import type { Livro } from "../types/livro.js";

export class LivroRepository {
  async buscarTodos() {
    return prisma.livro.findMany();
  }

  async buscarPorId(id: string) {
    return prisma.livro.findUnique({
      where: {
        id: id,
      },
    });
  }

  async criar(livro: Livro) {
    return prisma.livro.create({
      data: {
        titulo: livro.titulo,
        autorId: livro.autorId,
        descricao: livro.descricao ?? null,
        avaliacao: livro.avaliacao ?? null,
        preco: livro.preco ?? null,
        anoDePublicacao: livro.anoDePublicacao ?? null,
        marca: livro.marca ?? null,
        isbn: livro.isbn ?? null,
        fotoPath: livro.fotoPath ?? null,
      },
    });
  }

  async atualizarPorId(id: string, livro: Livro) {
    return prisma.livro.update({
      where: {
        id: id,
      },
      data: {
        titulo: livro.titulo,
        autorId: livro.autorId,
        descricao: livro.descricao ?? null,
        avaliacao: livro.avaliacao ?? null,
        preco: livro.preco ?? null,
        anoDePublicacao: livro.anoDePublicacao ?? null,
        marca: livro.marca ?? null,
        isbn: livro.isbn ?? null,
        fotoPath: livro.fotoPath ?? null,
      },
    });
  }

  async apagar(id: string) {
    return prisma.livro.delete({
      where: {
        id: id,
      },
    });
  }
}
