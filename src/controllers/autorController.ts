import type { FastifyRequest, FastifyReply } from "fastify";
import {
  buscarAutores,
  buscarAutorPorId,
  criarAutor,
  atualizarAutorPorId,
  apagarAutor,
} from "../services/autorServices.js";

export interface Autor {
  nome: string;
}

type ParamsId = { Params: { id: string } };

export async function listarAutores(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const resultado = await buscarAutores();
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao buscar autores." });
  }
}

export async function buscarAutorId(
  request: FastifyRequest<ParamsId>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params;
    const resultado = await buscarAutorPorId(id);
    if (!resultado) {
      return reply
        .status(404)
        .send({ message: "Autor com id não encontrado." });
    }
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao buscar autor." });
  }
}

export async function cadastrarAutor(
  request: FastifyRequest<{ Body: Autor }>,
  reply: FastifyReply,
) {
  try {
    const autor = request.body;
    const resultado = await criarAutor(autor);
    return reply.status(201).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao cadastrar autor." });
  }
}

export async function atualizarAutor(
  request: FastifyRequest<ParamsId & { Body: Autor }>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params;
    const autor = request.body;
    const verificarId = await buscarAutorPorId(id);
    if (!verificarId) {
      return reply
        .status(404)
        .send({ message: "Autor com id não encontrado para atualizar." });
    }
    const resultado = await atualizarAutorPorId(id, autor);
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao atualizar autor." });
  }
}

export async function deletarAutor(
  request: FastifyRequest<ParamsId>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params;
    const verificarId = await buscarAutorPorId(id);
    if (!verificarId) {
      return reply
        .status(404)
        .send({ message: "Autor com id não encontrado para deletar." });
    }
    const resultado = await apagarAutor(id);
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao deletar autor." });
  }
}
