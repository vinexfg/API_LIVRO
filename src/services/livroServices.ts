import prisma from "../prisma.js";

export async function buscarLivros() {
  return await prisma.livro.findMany();
}
