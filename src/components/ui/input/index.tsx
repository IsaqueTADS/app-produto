import { useState } from 'react';
import { Platform, TextInput, TextInputProps } from 'react-native';

import { Field } from '@/components/ui/field';
import { semContornoWeb } from '@/components/ui/field/style';
import { IconeMaterial } from '@/components/ui/types';
import { tokens } from '@/constants/theme';
import { styles } from './style';

type InputProps = TextInputProps & {
  label: string;
  icon: IconeMaterial;
  active?: boolean;
};

export function Input({ label, icon, active, onFocus, onBlur, ...props }: InputProps) {
  const [focado, setFocado] = useState(false);

  return (
    <Field label={label} icon={icon} active={active} focused={focado}>
      <TextInput
        style={[styles.input, Platform.OS === 'web' && semContornoWeb]}
        underlineColorAndroid="transparent"
        placeholderTextColor={tokens.colors.textMuted}
        accessibilityLabel={label}
        onFocus={(evento) => {
          setFocado(true);
          onFocus?.(evento);
        }}
        onBlur={(evento) => {
          setFocado(false);
          onBlur?.(evento);
        }}
        {...props}
      />
    </Field>
  );
}
