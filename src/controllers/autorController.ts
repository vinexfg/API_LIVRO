import type { FastifyRequest, FastifyReply } from "fastify";
import {
  buscarAutores,
  buscarAutorPorId,
  criarAutor,
  atualizarAutorPorId,
  apagarAutor,
  type Autor,
} from "../services/autorServices.js";

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
    return reply.status(500).send({ message: "erro ao buscar autores" });
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
      reply.status(404).send({ message: "nao existe autor com essa id" });
    }
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ message: "Error ao buscar os autores" });
  }
}

export async function CadastrarAutor(
  request: FastifyRequest<{ Body: Autor }>,
  reply: FastifyReply,
) {
  try {
    const autor = request.body;
    const resultado = await criarAutor(autor);
    return reply.status(201).send(resultado);
  } catch (error) {
    console.error(error);
    return reply
      .status(500)
      .send({ message: "erro interno ao cadastrar autor" });
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
      return reply.status(404).send({ message: "autor com id nao encontrado" });
    }
    const resultado = await atualizarAutorPorId(id, autor);
    reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ message: "error interno ao editar o autor" });
  }
}

export async function deletarAutor(
  request: FastifyRequest<ParamsId>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params;
    const verficarId = await buscarAutorPorId(id);
    if (!verficarId) {
      reply.status(404).send({ message: "erro ao deletar autor" });
    }
    const resultado = await apagarAutor(id);
    return reply.status(200).send(resultado);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ message: "erro ao deletar o autor" });
  }
}
