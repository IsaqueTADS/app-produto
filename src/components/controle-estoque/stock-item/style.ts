import { StyleSheet } from 'react-native';

import { tokens } from '@/constants/theme';

export const styles = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    padding: 14,
    borderRadius: 10,
    borderLeftWidth: 4,
    backgroundColor: tokens.colors.white,
  },
  cartaoEmEstoque: {
    borderLeftColor: tokens.colors.success,
  },
  cartaoEstoqueBaixo: {
    borderLeftColor: tokens.colors.danger,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: tokens.colors.textDark,
  },
  quantidade: {
    fontSize: 14,
    color: tokens.colors.textMuted,
  },
  quantidadeBaixa: {
    fontWeight: '600',
    color: tokens.colors.danger,
  },
});
