import type { FastifyInstance } from "fastify";

export default function routes(app: FastifyInstance) {
  app.get("/livros", async (request, reply) => {
    reply.send({ message: "Listar todos os livros" });
  });

  app.get("/livros/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    reply.send({ message: `Buscar livro: ${id}` });
  });

  app.post("/livros", async (request, reply) => {
    reply.status(201).send({ message: "Livro criado!" });
  });

  app.put("/livros/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    reply.send({ message: `Atualizar livro: ${id}` });
  });

  app.delete("/livros/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    reply.send({ message: `Deletar livro: ${id}` });
  });
}
