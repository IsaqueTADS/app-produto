import { StyleSheet } from 'react-native';

import { tokens } from '@/constants/theme';

export const styles = StyleSheet.create({
  conteudo: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 12,
  },
  vazio: {
    marginTop: 48,
    textAlign: 'center',
    fontSize: 15,
    color: tokens.colors.textMuted,
  },
});
