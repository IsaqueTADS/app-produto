import { View } from 'react-native';

import { Input } from '@/components/ui/input';
import { FormularioProduto } from '@/models/produto';
import { styles } from './style';

type ProductFieldsProps = {
  valores: FormularioProduto;
  onChange: (parcial: Partial<FormularioProduto>) => void;
};

export function ProductFields({ valores, onChange }: ProductFieldsProps) {
  return (
    <View style={styles.campos}>
      <Input
        label="Nome"
        icon="tag"
        placeholder="Nome do Produto"
        value={valores.nome}
        onChangeText={(nome) => onChange({ nome })}
      />
      <Input
        label="Preço"
        icon="currency-usd"
        active={false}
        placeholder="R$ 0,00"
        keyboardType="decimal-pad"
        value={valores.preco}
        onChangeText={(preco) => onChange({ preco })}
      />
      <Input
        label="Quantidade de Entrada"
        icon="package-variant-closed"
        placeholder="0"
        keyboardType="number-pad"
        value={valores.quantidade}
        onChangeText={(quantidade) => onChange({ quantidade })}
      />
      <Input
        label="Estoque Mínimo"
        icon="package-down"
        placeholder="0"
        keyboardType="number-pad"
        value={valores.estoqueMinimo}
        onChangeText={(estoqueMinimo) => onChange({ estoqueMinimo })}
      />
    </View>
  );
}
