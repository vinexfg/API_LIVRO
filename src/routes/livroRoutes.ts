import type { FastifyInstance } from "fastify";
import { listarLivros } from "../controllers/livroController.js";

export default function routes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    reply.send({ message: "Rota Inicial - API LIVROS" });
  });

  app.get("/livros", listarLivros);
}
