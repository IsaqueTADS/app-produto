import { StyleSheet } from 'react-native';

import { tokens } from '@/constants/theme';

export const styles = StyleSheet.create({
  valor: {
    flex: 1,
    fontSize: 16,
    color: tokens.colors.textDark,
  },
  placeholder: {
    color: tokens.colors.textMuted,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  fundo: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  folha: {
    maxHeight: '60%',
    padding: 16,
    paddingBottom: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: tokens.colors.white,
  },
  tituloFolha: {
    marginBottom: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    fontWeight: '600',
    color: tokens.colors.textMuted,
  },
  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  opcaoAtiva: {
    backgroundColor: tokens.colors.background,
  },
  textoOpcao: {
    fontSize: 16,
    color: tokens.colors.textDark,
  },
  textoOpcaoAtiva: {
    fontWeight: '600',
    color: tokens.colors.primary,
  },
});
