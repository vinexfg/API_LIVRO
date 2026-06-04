import type { FastifyInstance } from "fastify";

export default function routes(app: FastifyInstance) {
  app.get("/teste", async (request, reply) => {
    reply.send({ message: "Rota Inicial" });
  });

  app.get("/teste", async (request, reply) => {
    reply.send({ message: "Rota de Teste" });
  });
}
