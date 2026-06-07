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
  autorId: string;
  descricao?: string;
  avaliacao?: number;
  preco?: number;
  ano_de_publicacao?: number;
  marca?: string;
  isbn?: string;
  foto_path?: string;
}
type ParamsId = { Params: { id: string } };

export async function listarLivros(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const resultado = await buscarLivros();
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao buscar livros." });
  }
}

export async function buscarLivroId(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params;
    const resultado = await buscarLivroPorId(id);
    if (!resultado) {
      return reply
        .status(404)
        .send({ message: "Livro com id não encontrado." });
    }
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao buscar livro." });
  }
}

export async function cadastrarLivro(
  request: FastifyRequest<{ Body: Livro }>,
  reply: FastifyReply,
) {
  try {
    const livro = request.body;
    const resultado = await criarLivro(livro);
    return reply.status(201).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao cadastrar livro." });
  }
}

export async function atualizarLivro(
  request: FastifyRequest<{ Body: Livro }>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params as { id: string };
    const livro = request.body;
    const verificarId = await buscarLivroPorId(id);
    if (!verificarId) {
      return reply
        .status(404)
        .send({ message: "Livro com id não encontrado para atualizar." });
    }
    const resultado = await atualizarLivroPorId(id, livro);
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao atualizar livro." });
  }
}

export async function deletarLivro(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params;
    const verificarId = await buscarLivroPorId(id);
    if (!verificarId) {
      return reply
        .status(404)
        .send({ message: "Livro com id não encontrado para deletar." });
    }
    const resultado = await apagarLivro(id);
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao deletar livro." });
  }
}
