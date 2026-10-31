import { Text, View } from 'react-native';

import { Badge } from '@/components/ui/badge';
import { getStatusEstoque, Produto } from '@/models/produto';
import { styles } from './style';

type StockItemProps = {
  produto: Produto;
};

export function StockItem({ produto }: StockItemProps) {
  const estoqueBaixo = getStatusEstoque(produto) === 'estoque-baixo';

  return (
    <View style={[styles.cartao, estoqueBaixo ? styles.cartaoEstoqueBaixo : styles.cartaoEmEstoque]}>
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={1}>
          {produto.nome}
        </Text>
        <Text style={[styles.quantidade, estoqueBaixo && styles.quantidadeBaixa]}>
          {produto.quantidade} un.
        </Text>
      </View>
      <Badge
        label={estoqueBaixo ? 'Estoque Baixo' : 'Em Estoque'}
        icon={estoqueBaixo ? 'alert-circle' : 'check-circle'}
        variant={estoqueBaixo ? 'danger' : 'success'}
      />
    </View>
  );
}
