import prisma from "../prisma.js";

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

export async function criarLivro(titulo: string, autor: string) {
  return prisma.livro.create({
    data: {
      titulo: titulo,
      autor: autor,
    },
  });
}

export async function atualizarLivroPorId(
  id: string,
  titulo: string,
  autor: string,
) {
  return prisma.livro.update({
    where: {
      id: id,
    },
    data: {
      titulo: titulo,
      autor: autor,
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
