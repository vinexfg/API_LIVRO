import type { FastifyRequest, FastifyReply } from "fastify";
import {
  buscarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivroPorId,
  apagarLivro,
} from "../services/livroServices.js";

export interface Livro {
  titulo: string;
  descricao?: string;
  autor: string;
  avaliacao?: number;
  preco?: number;
  ano_de_publicacao?: number;
  marca?: string;
  isbn?: string;
  foto_path?: string;
}

export async function listarLivros(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const livros = await buscarLivros();
  return reply.status(200).send(livros);
}

export async function buscarLivroId(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string };
  const livro = await buscarLivroPorId(id);
  return reply.status(200).send(livro);
}

export async function cadastrarLivro(
  request: FastifyRequest<{ Body: Livro }>,
  reply: FastifyReply,
) {
  const livro = request.body;
  const resultado = await criarLivro(livro);

  return reply
    .status(201)
    .send({ message: "Livro cadastrado com sucesso! " + resultado });
}

export async function atualizarLivro(
  request: FastifyRequest<{ Body: Livro }>,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string };
  const livro = request.body;
  const resultado = await atualizarLivroPorId(id, livro);
  return reply
    .status(200)
    .send({ message: "Livro atualizado com sucesso!" + resultado });
}

export async function deletarLivro(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string };
  const resultado = await apagarLivro(id);

  return reply
    .status(200)
    .send({ message: "Livro deletado com sucesso!" + resultado });
}

//  CODIGO USADO DE BASE PARA TESTAR OS CONTROLLERS E ROTAS

// const livros_db_teste: Livro[] = [
//   {
//     titulo: "Livro 01",
//     descricao: "Descrição 01",
//     autor: "Autor 01",
//   },
//   {
//     titulo: "Livro 02",
//     descricao: "Descrição 02",
//     autor: "Autor 02",
//   },
// ];

// LISTAR LIVROS DE TESTE - SEM PRISMA
// export async function listarLivros(
//   request: FastifyRequest,
//   reply: FastifyReply,
// ) {
//   return reply.status(200).send(livros_db_teste);
// }

// BUSCAR LIVRO POR ID DE TESTE - SEM PRISMA
// export async function buscarLivroId(
//   request: FastifyRequest,
//   reply: FastifyReply,
// ) {
//   const { id } = request.params as { id: string };

//   return reply.status(200).send(livros_db_teste[Number(id)]);
// }

// CADASTRAR LIVRO TESTE - SEM PRISMA
// export async function cadastrarLivro(
//   request: FastifyRequest<{ Body: Livro }>,
//   reply: FastifyReply,
// ) {
//   const livro = request.body;
//   livros_db_teste.push(livro);

//   return reply.status(201).send({ message: "Livro cadastrado com sucesso!" });
// }

// ATUALIZAR LIVRO TESTE - SEM PRISMA
// export async function atualizarLivro(
//   request: FastifyRequest<{ Body: Livro }>,
//   reply: FastifyReply,
// ) {
//   const { id } = request.params as { id: string };
//   const livro_atualizado = request.body;
//   livros_db_teste[Number(id)] = livro_atualizado;

//   return reply.status(200).send({ message: "Livro atualizado com sucesso!" });
// }

// DELETAR LIVRO TESTE - SEM PRISMA
// export async function deletarLivro(
//   request: FastifyRequest,
//   reply: FastifyReply,
// ) {
//   const { id } = request.params as { id: string };
//   livros_db_teste.splice(Number(id), 1);

//   return reply.status(200).send({ message: "Livro deletado com sucesso!" });
// }
