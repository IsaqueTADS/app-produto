import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { StockList } from '@/components/controle-estoque/stock-list';
import { Header } from '@/components/ui/header';
import { tokens } from '@/constants/theme';
import { useProdutos } from '@/hooks/use-produtos';

export default function EstoqueScreen() {
  const { produtos } = useProdutos();

  return (
    <View style={styles.container}>
      <Header icon="warehouse" title="Controle de Estoque" />
      {produtos ? (
        <StockList produtos={produtos} />
      ) : (
        <ActivityIndicator style={styles.carregando} color={tokens.colors.primary} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carregando: {
    marginTop: 48,
  },
});
