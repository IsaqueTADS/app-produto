import { FlatList, Text } from 'react-native';

import { StockItem } from '@/components/controle-estoque/stock-item';
import { Produto } from '@/models/produto';
import { styles } from './style';

type StockListProps = {
  produtos: Produto[];
};

export function StockList({ produtos }: StockListProps) {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(produto) => produto.id}
      renderItem={({ item }) => <StockItem produto={item} />}
      contentContainerStyle={styles.conteudo}
      ListEmptyComponent={<Text style={styles.vazio}>Nenhum produto cadastrado ainda.</Text>}
    />
  );
}
