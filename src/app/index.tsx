import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tokens = {
  colors: {
    primary: '#2264B1',
    background: '#F6F8FB',
    textDark: '#111111',
    textMuted: '#7A7A7A',
    borderActive: '#2264B1',
    borderInactive: '#9E9E9E',
    white: '#FFFFFF',
  },
};

export default function NovoProdutoScreen() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleCadastrar = () => {
    Alert.alert('Sucesso', 'Ação validada com sucesso!', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <MaterialCommunityIcons name="package-check" size={32} color={tokens.colors.primary} />
        <Text style={styles.headerTitle}>Novo Produto</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={[styles.fieldLabel, { color: tokens.colors.primary }]}>Nome</Text>
          <View style={[styles.inputContainer, { borderColor: tokens.colors.borderActive }]}>
            <MaterialCommunityIcons name="tag" size={20} color={tokens.colors.primary} />
            <TextInput
              style={styles.input}
              placeholder="Nome do Produto"
              placeholderTextColor={tokens.colors.textMuted}
              value={nome}
              onChangeText={setNome}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={[styles.fieldLabel, { color: tokens.colors.textMuted }]}>Preço</Text>
          <View style={[styles.inputContainer, { borderColor: tokens.colors.borderInactive }]}>
            <MaterialCommunityIcons name="currency-usd" size={20} color={tokens.colors.textMuted} />
            <TextInput
              style={styles.input}
              placeholder="R$ 0,00"
              placeholderTextColor={tokens.colors.textMuted}
              keyboardType="decimal-pad"
              value={preco}
              onChangeText={setPreco}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={[styles.fieldLabel, { color: tokens.colors.primary }]}>
            Quantidade de Entrada
          </Text>
          <View style={[styles.inputContainer, { borderColor: tokens.colors.borderActive }]}>
            <MaterialCommunityIcons
              name="package-variant-closed"
              size={20}
              color={tokens.colors.primary}
            />
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor={tokens.colors.textMuted}
              keyboardType="number-pad"
              value={quantidade}
              onChangeText={setQuantidade}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={handleCadastrar}
        >
          <Text style={styles.buttonText}>CADASTRAR PRODUTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 72,
    marginBottom: 40,
    gap: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: tokens.colors.textDark,
  },
  form: {
    gap: 24,
  },
  field: {
    position: 'relative',
  },
  fieldLabel: {
    position: 'absolute',
    top: -9,
    left: 12,
    zIndex: 1,
    paddingHorizontal: 6,
    backgroundColor: tokens.colors.background,
    fontSize: 13,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderRadius: 10,
    borderWidth: 1.5,
    paddingHorizontal: 14,
    backgroundColor: tokens.colors.white,
    gap: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: tokens.colors.textDark,
  },
  button: {
    height: 56,
    marginTop: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colors.primary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: tokens.colors.white,
    letterSpacing: 0.5,
  },
});