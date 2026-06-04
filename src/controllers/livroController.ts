import type { FastifyRequest, FastifyReply } from "fastify";

export async function listarLivros(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const livros = ["Livro 01", "Livro 02"];

  return reply.send(livros);
}
