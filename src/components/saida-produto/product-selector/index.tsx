import { Select } from '@/components/ui/select';
import { Produto } from '@/models/produto';

type ProductSelectorProps = {
  produtos: Produto[];
  value: string | null;
  onChange: (produtoId: string) => void;
};

export function ProductSelector({ produtos, value, onChange }: ProductSelectorProps) {
  const opcoes = produtos.map((produto) => ({
    label: `${produto.nome} (${produto.quantidade} un.)`,
    value: produto.id,
  }));

  return (
    <Select
      label="Produto"
      icon="cube-outline"
      options={opcoes}
      value={value}
      onChange={onChange}
      placeholder={produtos.length > 0 ? 'Selecione um produto' : 'Nenhum produto cadastrado'}
      disabled={produtos.length === 0}
    />
  );
}
