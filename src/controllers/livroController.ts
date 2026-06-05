import type { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { buscarLivros } from "../services/livroServices.js";

interface Livro {
  titulo: string;
  descricao: string;
  autor: string;
  // avaliacao: number;
  // preco: number;
  // ano_de_publicacao: number;
  // marca: string;
  // isbn: number;
  // foto_path: string;
}

const livros_db_teste: Livro[] = [
  {
    titulo: "Livro 01",
    descricao: "Descrição 01",
    autor: "Autor 01",
  },
  {
    titulo: "Livro 02",
    descricao: "Descrição 02",
    autor: "Autor 02",
  },
];

export async function listarLivros(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  return reply.status(200).send(livros_db_teste);
}

export async function buscarLivroId(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string };

  return reply.status(200).send(livros_db_teste[Number(id)]);
}

export async function cadastrarLivro(
  request: FastifyRequest<{ Body: Livro }>,
  reply: FastifyReply,
) {
  const livro = request.body;
  livros_db_teste.push(livro);

  return reply.status(201).send({ message: "Livro cadastrado com sucesso!" });
}

export async function atualizarLivro(
  request: FastifyRequest<{ Body: Livro }>,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string };
  const livro_atualizado = request.body;
  livros_db_teste[Number(id)] = livro_atualizado;

  return reply.status(200).send({ message: "Livro atualizado com sucesso!" });
}

export async function deletarLivro(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string };
  livros_db_teste.splice(Number(id), 1);

  return reply.status(200).send({ message: "Livro deletado com sucesso!" });
}
