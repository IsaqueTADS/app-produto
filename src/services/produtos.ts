import AsyncStorage from '@react-native-async-storage/async-storage';

import { Movimentacao, NovoProduto, Produto, SaidaProduto, validarRetirada } from '@/models/produto';

const CHAVE_ESTOQUE = '@app-produto:estoque';
const MENSAGEM_CORROMPIDO = 'Os dados do estoque estão corrompidos. Nenhuma alteração foi feita.';

interface Estoque {
  produtos: Produto[];
  movimentacoes: Movimentacao[];
}

export class ErroEstoque extends Error {}

// Leituras e escritas esperam a operação anterior terminar, para que duas ações
// nunca partam do mesmo estado antigo e uma sobrescreva a outra.
let fila: Promise<unknown> = Promise.resolve();

function executarNaFila<T>(operacao: () => Promise<T>): Promise<T> {
  const resultado = fila.then(operacao);
  fila = resultado.catch(() => undefined);
  return resultado;
}

function ehEstoque(dados: unknown): dados is Estoque {
  return (
    typeof dados === 'object' &&
    dados !== null &&
    Array.isArray((dados as Estoque).produtos) &&
    Array.isArray((dados as Estoque).movimentacoes)
  );
}

async function lerEstoque(): Promise<Estoque> {
  let conteudo: string | null;

  try {
    conteudo = await AsyncStorage.getItem(CHAVE_ESTOQUE);
  } catch {
    throw new ErroEstoque('Não foi possível acessar os dados salvos. Tente novamente.');
  }

  if (conteudo === null) {
    return { produtos: [], movimentacoes: [] };
  }

  let dados: unknown;

  try {
    dados = JSON.parse(conteudo);
  } catch {
    throw new ErroEstoque(MENSAGEM_CORROMPIDO);
  }

  if (!ehEstoque(dados)) {
    throw new ErroEstoque(MENSAGEM_CORROMPIDO);
  }

  return dados;
}

async function salvarEstoque(estoque: Estoque): Promise<void> {
  try {
    await AsyncStorage.setItem(CHAVE_ESTOQUE, JSON.stringify(estoque));
  } catch {
    throw new ErroEstoque('Não foi possível salvar as alterações. Tente novamente.');
  }
}

export function listarProdutos(): Promise<Produto[]> {
  return executarNaFila(async () => (await lerEstoque()).produtos);
}

export function cadastrarProduto(novo: NovoProduto): Promise<Produto> {
  return executarNaFila(async () => {
    const estoque = await lerEstoque();
    const produto: Produto = { id: gerarId(), ...novo };

    await salvarEstoque({ ...estoque, produtos: [...estoque.produtos, produto] });

    return produto;
  });
}

export function registrarSaida({ produtoId, quantidade, motivo }: SaidaProduto): Promise<Produto> {
  return executarNaFila(async () => {
    const estoque = await lerEstoque();
    const produto = estoque.produtos.find((item) => item.id === produtoId);

    if (!produto) {
      throw new ErroEstoque('Produto não encontrado. Atualize a lista e tente novamente.');
    }

    const erro = validarRetirada(produto, quantidade);

    if (erro) {
      throw new ErroEstoque(erro);
    }

    const atualizado: Produto = { ...produto, quantidade: produto.quantidade - quantidade };
    const movimentacao: Movimentacao = {
      id: gerarId(),
      produtoId,
      produtoNome: produto.nome,
      quantidade,
      motivo,
      data: new Date().toISOString(),
    };

    await salvarEstoque({
      produtos: estoque.produtos.map((item) => (item.id === produtoId ? atualizado : item)),
      movimentacoes: [...estoque.movimentacoes, movimentacao],
    });

    return atualizado;
  });
}

export function mensagemDeErro(erro: unknown): string {
  return erro instanceof ErroEstoque ? erro.message : 'Ocorreu um erro inesperado. Tente novamente.';
}

function gerarId(): string {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
