import prisma from "../prisma.js";
import type { Autor } from "../controllers/autorController.js";

export async function buscarAutores() {
  return prisma.autor.findMany();
}

export async function buscarAutorPorId(id: string) {
  return prisma.autor.findUnique({
    where: {
      id: id,
    },
  });
}

export async function criarAutor(autor: Autor) {
  return prisma.autor.create({
    data: {
      nome: autor.nome,
    },
  });
}

export async function atualizarAutorPorId(id: string, autor: Autor) {
  return prisma.autor.update({
    where: {
      id: id,
    },
    data: {
      nome: autor.nome,
    },
  });
}

export async function apagarAutor(id: string) {
  return prisma.autor.delete({
    where: {
      id: id,
    },
  });
}
