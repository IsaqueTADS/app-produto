import { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconeMaterial } from '@/components/ui/types';
import { tokens } from '@/constants/theme';
import { styles } from './style';

type FieldProps = {
  label: string;
  icon: IconeMaterial;
  active?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  children: ReactNode;
};

export function Field({ label, icon, active = true, disabled = false, onPress, children }: FieldProps) {
  const cor = active ? tokens.colors.primary : tokens.colors.textMuted;
  const estilo = [
    styles.container,
    active ? styles.containerAtivo : styles.containerInativo,
    disabled && styles.desabilitado,
  ];
  const conteudo = (
    <>
      <MaterialCommunityIcons name={icon} size={20} color={cor} />
      {children}
    </>
  );

  return (
    <View style={styles.field}>
      <Text style={[styles.label, active ? styles.labelAtivo : styles.labelInativo]}>{label}</Text>
      {onPress ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={label}
          disabled={disabled}
          onPress={onPress}
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
