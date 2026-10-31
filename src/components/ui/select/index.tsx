import { useState } from 'react';
import { FlatList, Modal, Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Field } from '@/components/ui/field';
import { IconeMaterial } from '@/components/ui/types';
import { tokens } from '@/constants/theme';
import { styles } from './style';

type SelectOption<T extends string> = {
  label: string;
  value: T;
};

type SelectProps<T extends string> = {
  label: string;
  icon: IconeMaterial;
  options: SelectOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  placeholder: string;
  active?: boolean;
  disabled?: boolean;
};

export function Select<T extends string>({
  label,
  icon,
  options,
  value,
  onChange,
  placeholder,
  active = true,
  disabled = false,
}: SelectProps<T>) {
  const [aberto, setAberto] = useState(false);
  const selecionado = options.find((option) => option.value === value);
  const cor = active ? tokens.colors.primary : tokens.colors.textMuted;

  const escolher = (novo: T) => {
    onChange(novo);
    setAberto(false);
  };

  return (
    <>
      <Field
        label={label}
        icon={icon}
        active={active}
        disabled={disabled}
        onPress={() => setAberto(true)}
      >
        <Text style={[styles.valor, !selecionado && styles.placeholder]} numberOfLines={1}>
          {selecionado?.label ?? placeholder}
        </Text>
        <MaterialCommunityIcons name="chevron-down" size={22} color={cor} />
      </Field>

      <Modal visible={aberto} transparent animationType="fade" onRequestClose={() => setAberto(false)}>
        <View style={styles.modal}>
          <Pressable style={styles.fundo} onPress={() => setAberto(false)} />
          <View style={styles.folha}>
            <Text style={styles.tituloFolha}>{label}</Text>
            <FlatList
              data={options}
              keyExtractor={(option) => option.value}
              renderItem={({ item }) => {
                const ativa = item.value === value;

                return (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ selected: ativa }}
                    onPress={() => escolher(item.value)}
                    style={[styles.opcao, ativa && styles.opcaoAtiva]}
                  >
                    <Text style={[styles.textoOpcao, ativa && styles.textoOpcaoAtiva]}>{item.label}</Text>
                    {ativa && <MaterialCommunityIcons name="check" size={20} color={tokens.colors.primary} />}
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
