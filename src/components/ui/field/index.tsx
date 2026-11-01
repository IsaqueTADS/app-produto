import { ReactNode } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconeMaterial } from '@/components/ui/types';
import { tokens } from '@/constants/theme';
import { semContornoWeb, styles } from './style';

type FieldProps = {
  label: string;
  icon: IconeMaterial;
  active?: boolean;
  focused?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  children: ReactNode;
};

export function Field({
  label,
  icon,
  active = true,
  focused = false,
  disabled = false,
  onPress,
  onFocus,
  onBlur,
  children,
}: FieldProps) {
  const destaque = active || focused;
  const cor = destaque ? tokens.colors.primary : tokens.colors.textMuted;
  const estilo = [
    styles.container,
    destaque ? styles.containerAtivo : styles.containerInativo,
    disabled && styles.desabilitado,
    Platform.OS === 'web' && semContornoWeb,
  ];
  const conteudo = (
    <>
      <MaterialCommunityIcons name={icon} size={20} color={cor} />
      {children}
    </>
  );

  return (
    <View style={styles.field}>
      <Text style={[styles.label, destaque ? styles.labelAtivo : styles.labelInativo]}>{label}</Text>
      {onPress ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={label}
          disabled={disabled}
          onPress={onPress}
          onFocus={onFocus}
          onBlur={onBlur}
          style={estilo}
        >
          {conteudo}
        </Pressable>
      ) : (
        <View style={estilo}>{conteudo}</View>
      )}
    </View>
  );
}
