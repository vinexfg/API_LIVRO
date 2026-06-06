import prisma from "../prisma.js";
import type { Livro } from "../controllers/livroController.js";

export async function buscarLivros() {
  return prisma.livro.findMany();
}

export async function buscarLivroPorId(id: string) {
  return prisma.livro.findUnique({
    where: {
      id: id,
    },
  });
}

export async function criarLivro(livro: Livro) {
  return prisma.livro.create({
    data: {
      titulo: livro.titulo,
      autor: livro.autor,
      descricao: livro.descricao ?? null,
      avaliacao: livro.avaliacao ?? null,
      preco: livro.preco ?? null,
      ano_de_publicacao: livro.ano_de_publicacao ?? null,
      marca: livro.marca ?? null,
      isbn: livro.isbn ?? null,
      foto_path: livro.foto_path ?? null,
    },
  });
}

export async function atualizarLivroPorId(id: string, livro: Livro) {
  return prisma.livro.update({
    where: {
      id: id,
    },
    data: {
      titulo: livro.titulo,
      autor: livro.autor,
      descricao: livro.descricao ?? null,
      avaliacao: livro.avaliacao ?? null,
      preco: livro.preco ?? null,
      ano_de_publicacao: livro.ano_de_publicacao ?? null,
      marca: livro.marca ?? null,
      isbn: livro.isbn ?? null,
      foto_path: livro.foto_path ?? null,
    },
  });
}

export async function apagarLivro(id: string) {
  return prisma.livro.delete({
    where: {
      id: id,
    },
  });
}
