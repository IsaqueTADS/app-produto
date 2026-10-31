import { StyleSheet } from 'react-native';

import { tokens } from '@/constants/theme';

export const styles = StyleSheet.create({
  field: {
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -9,
    left: 12,
    zIndex: 1,
    paddingHorizontal: 6,
    backgroundColor: tokens.colors.background,
    fontSize: 13,
    fontWeight: '600',
  },
  labelAtivo: {
    color: tokens.colors.primary,
  },
  labelInativo: {
    color: tokens.colors.textMuted,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderRadius: 10,
    borderWidth: 1.5,
    paddingHorizontal: 14,
    backgroundColor: tokens.colors.white,
    gap: 10,
  },
  containerAtivo: {
    borderColor: tokens.colors.borderActive,
  },
  containerInativo: {
    borderColor: tokens.colors.borderInactive,
  },
  desabilitado: {
    opacity: 0.6,
  },
});
