import { StyleSheet } from 'react-native';

import { tokens } from '@/constants/theme';

export const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colors.primary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: tokens.colors.white,
    letterSpacing: 0.5,
  },
  desabilitado: {
    opacity: 0.6,
  },
});
