import type { Livro } from "../types/livro.js";
import { LivroRepository } from "../repository/LivroRepository.js";

const livroRepository = new LivroRepository();

export async function buscarLivros() {
  return livroRepository.buscarTodos();
}

export async function buscarLivroPorId(id: string) {
  return livroRepository.buscarPorId(id);
}

export async function criarLivro(livro: Livro) {
  return livroRepository.criar(livro);
}

export async function atualizarLivroPorId(id: string, livro: Livro) {
  return livroRepository.atualizarPorId(id, livro);
}

export async function apagarLivro(id: string) {
  return livroRepository.apagar(id);
}
