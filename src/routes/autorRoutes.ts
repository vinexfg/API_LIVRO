import type { FastifyInstance } from "fastify";
import {
  listarAutores,
  buscarAutorId,
  cadastrarAutor,
  atualizarAutor,
  deletarAutor,
} from "../controllers/autorController.js";

export default function autorRoutes(app: FastifyInstance) {
  app.get("/autores", listarAutores);

  app.get("/autores/:id", buscarAutorId);

  app.post("/autores", cadastrarAutor);

  app.put("/autores/:id", atualizarAutor);

  app.delete("/autores/:id", deletarAutor);
}
