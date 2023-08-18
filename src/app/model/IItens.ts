export interface IItens{
  nome: string;
  lancamento: string;
  cartaz: string;
  descricao1: string;
  criador: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
