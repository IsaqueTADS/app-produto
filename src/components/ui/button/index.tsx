import { Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ label, onPress, disabled = false }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.desabilitado]}
      activeOpacity={0.85}
      disabled={disabled}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Text style={styles.texto}>{label}</Text>
    </TouchableOpacity>
  );
}
