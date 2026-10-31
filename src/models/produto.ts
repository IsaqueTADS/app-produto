export const MOTIVOS_SAIDA = ['Venda', 'Avarias', 'Uso Interno'] as const;

export type MotivoSaida = (typeof MOTIVOS_SAIDA)[number];

export type StatusEstoque = 'em-estoque' | 'estoque-baixo';

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  estoqueMinimo: number;
}

export type NovoProduto = Omit<Produto, 'id'>;

export interface SaidaProduto {
  produtoId: string;
  quantidade: number;
  motivo: MotivoSaida;
}

export interface Movimentacao extends SaidaProduto {
  id: string;
  produtoNome: string;
  data: string;
}

export interface FormularioProduto {
  nome: string;
  preco: string;
  quantidade: string;
  estoqueMinimo: string;
}

export interface FormularioSaida {
  produtoId: string | null;
  quantidade: string;
  motivo: MotivoSaida | null;
}

export type Resultado<T> = { ok: true; valor: T } | { ok: false; erro: string };

export function getStatusEstoque(produto: Pick<Produto, 'quantidade' | 'estoqueMinimo'>): StatusEstoque {
  return produto.quantidade <= produto.estoqueMinimo ? 'estoque-baixo' : 'em-estoque';
}

export function validarRetirada(produto: Produto, quantidade: number): string | null {
  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    return 'A quantidade de saída deve ser maior que zero.';
  }

  if (quantidade > produto.quantidade) {
    return `Quantidade indisponível. Há apenas ${produto.quantidade} un. de ${produto.nome} em estoque.`;
  }

  return null;
}

export function interpretarProduto(formulario: FormularioProduto): Resultado<NovoProduto> {
  const nome = formulario.nome.trim();
  const preco = converterPreco(formulario.preco);
  const quantidade = converterInteiro(formulario.quantidade);
  const estoqueMinimo = converterInteiro(formulario.estoqueMinimo);

  if (!nome) {
    return { ok: false, erro: 'Informe o nome do produto.' };
  }

  if (preco === null || preco <= 0) {
    return { ok: false, erro: 'Informe um preço válido.' };
  }

  if (quantidade === null) {
    return { ok: false, erro: 'Informe uma quantidade válida.' };
  }

  if (estoqueMinimo === null) {
    return { ok: false, erro: 'Informe um estoque mínimo válido.' };
  }

  return { ok: true, valor: { nome, preco, quantidade, estoqueMinimo } };
}

export function interpretarSaida(formulario: FormularioSaida): Resultado<SaidaProduto> {
  const quantidade = converterInteiro(formulario.quantidade);

  if (!formulario.produtoId) {
    return { ok: false, erro: 'Selecione o produto.' };
  }

  if (quantidade === null) {
    return { ok: false, erro: 'Informe uma quantidade válida.' };
  }

  if (!formulario.motivo) {
    return { ok: false, erro: 'Selecione o motivo da saída.' };
  }

  return {
    ok: true,
    valor: { produtoId: formulario.produtoId, quantidade, motivo: formulario.motivo },
  };
}

function converterInteiro(texto: string): number | null {
  const valor = texto.trim();
  return /^\d+$/.test(valor) ? Number(valor) : null;
}

function converterPreco(texto: string): number | null {
  const limpo = texto.replace(/[^\d.,]/g, '');
  const normalizado = limpo.includes(',') ? limpo.replace(/\./g, '').replace(',', '.') : limpo;
  return /^\d+(\.\d+)?$/.test(normalizado) ? Number(normalizado) : null;
}
