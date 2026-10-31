import { StyleSheet } from 'react-native';

import { tokens } from '@/constants/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 40,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: tokens.colors.textDark,
  },
});
