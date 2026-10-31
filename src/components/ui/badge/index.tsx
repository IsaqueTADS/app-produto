import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconeMaterial } from '@/components/ui/types';
import { tokens } from '@/constants/theme';
import { styles } from './style';

type BadgeProps = {
  label: string;
  icon: IconeMaterial;
  variant: 'success' | 'danger';
};

const variantes = {
  success: { cor: tokens.colors.success, fundo: tokens.colors.successBackground },
  danger: { cor: tokens.colors.danger, fundo: tokens.colors.dangerBackground },
};

export function Badge({ label, icon, variant }: BadgeProps) {
  const { cor, fundo } = variantes[variant];

  return (
    <View style={[styles.badge, { backgroundColor: fundo }]}>
      <MaterialCommunityIcons name={icon} size={14} color={cor} />
      <Text style={[styles.texto, { color: cor }]}>{label}</Text>
    </View>
  );
}
