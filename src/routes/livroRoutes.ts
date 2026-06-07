import type { FastifyInstance } from "fastify";
import {
  listarLivros,
  buscarLivroId,
  cadastrarLivro,
  atualizarLivro,
  deletarLivro,
} from "../controllers/livroController.js";

export default function livroRoutes(app: FastifyInstance) {
  app.get("/livros", listarLivros);

  app.get("/livros/:id", buscarLivroId);

  app.post("/livros", cadastrarLivro);

  app.put("/livros/:id", atualizarLivro);

  app.delete("/livros/:id", deletarLivro);
}
