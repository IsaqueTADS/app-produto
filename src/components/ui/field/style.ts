import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { tokens } from '@/constants/theme';

// Com outline-style "auto" o navegador ignora outline-width e desenha o anel escuro de foco;
// "solid" com largura zero remove o contorno, e o foco do app passa a ser a borda azul.
export const semContornoWeb: ViewStyle & TextStyle = { outlineStyle: 'solid', outlineWidth: 0 };

export const styles = StyleSheet.create({
  field: {
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -8,
    left: 12,
    zIndex: 1,
    paddingHorizontal: 6,
    backgroundColor: tokens.colors.background,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '600',
    includeFontPadding: false,
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
