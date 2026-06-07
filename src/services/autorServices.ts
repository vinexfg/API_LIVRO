import prisma from "../prisma.js";

export interface Autor {
  nome: string;
}

export async function buscarAutores() {
  return prisma.autor.findMany({
    include: { livros: true },
  });
}

export async function buscarAutorPorId(id: string) {
  return prisma.autor.findUnique({
    where: { id },
    include: { livros: true },
  });
}

export async function criarAutor(autor: Autor) {
  return prisma.autor.create({
    data: { nome: autor.nome },
  });
}

export async function atualizarAutorPorId(id: string, autor: Autor) {
  return prisma.autor.update({
    where: { id },
    data: { nome: autor.nome },
  });
}

export async function apagarAutor(id: string) {
  return prisma.autor.delete({
    where: { id },
  });
}
