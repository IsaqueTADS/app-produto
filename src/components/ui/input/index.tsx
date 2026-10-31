import { TextInput, TextInputProps } from 'react-native';

import { Field } from '@/components/ui/field';
import { IconeMaterial } from '@/components/ui/types';
import { tokens } from '@/constants/theme';
import { styles } from './style';

type InputProps = TextInputProps & {
  label: string;
  icon: IconeMaterial;
  active?: boolean;
};

export function Input({ label, icon, active, ...props }: InputProps) {
  return (
    <Field label={label} icon={icon} active={active}>
      <TextInput
        style={styles.input}
        placeholderTextColor={tokens.colors.textMuted}
        accessibilityLabel={label}
        {...props}
      />
    </Field>
  );
}
