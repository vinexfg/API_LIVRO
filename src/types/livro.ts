export interface Livro {
  titulo: string;
  autorId: string;
  descricao?: string;
  avaliacao?: number;
  preco?: number;
  anoDePublicacao?: number;
  marca?: string;
  isbn?: string;
  fotoPath?: string;
}
