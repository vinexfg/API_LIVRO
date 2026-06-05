import type { FastifyInstance } from "fastify";
import {
  listarLivros,
  buscarLivroId,
  cadastrarLivro,
  atualizarLivro,
  deletarLivro,
} from "../controllers/livroController.js";

export default function routes(app: FastifyInstance) {
  app.get("/livros", listarLivros);

  app.post("/livros", cadastrarLivro);

  app.put("/livros/:id", atualizarLivro);

  app.delete("/livros/:id", deletarLivro);
}
