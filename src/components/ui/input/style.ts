import { StyleSheet } from 'react-native';

import { tokens } from '@/constants/theme';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    fontSize: 16,
    color: tokens.colors.textDark,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
