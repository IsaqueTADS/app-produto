import { useRef, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { ExitForm } from '@/components/saida-produto/exit-form';
import { Header } from '@/components/ui/header';
import { tokens } from '@/constants/theme';
import { useProdutos } from '@/hooks/use-produtos';
import { FormularioSaida, interpretarSaida } from '@/models/produto';
import { mensagemDeErro, registrarSaida } from '@/services/produtos';

const formularioVazio: FormularioSaida = {
  produtoId: null,
  quantidade: '',
  motivo: null,
};

export default function SaidaScreen() {
  const { produtos, setProdutos } = useProdutos();
  const [valores, setValores] = useState(formularioVazio);
  const [salvando, setSalvando] = useState(false);
  const enviando = useRef(false);

  const handleChange = (parcial: Partial<FormularioSaida>) => {
    setValores((atual) => ({ ...atual, ...parcial }));
  };

  const handleRegistrarSaida = async () => {
    if (enviando.current) return;

    const resultado = interpretarSaida(valores);

    if (!resultado.ok) {
      Alert.alert('Atenção', resultado.erro);
      return;
    }

    enviando.current = true;
    setSalvando(true);

    try {
      const atualizado = await registrarSaida(resultado.valor);

      setProdutos((atuais) =>
        atuais?.map((item) => (item.id === atualizado.id ? atualizado : item)) ?? null
      );
      setValores(formularioVazio);

      const { quantidade, motivo } = resultado.valor;
      Alert.alert(
        'Saída registrada',
        `${quantidade} un. de ${atualizado.nome} (${motivo}).\nEstoque atual: ${atualizado.quantidade} un.`
      );
    } catch (erro) {
      Alert.alert('Erro', mensagemDeErro(erro));
    } finally {
      enviando.current = false;
      setSalvando(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header icon="package-variant-minus" title="Saída de Produtos" />
      {produtos ? (
        <ExitForm
          produtos={produtos}
          valores={valores}
          salvando={salvando}
          onChange={handleChange}
          onSubmit={handleRegistrarSaida}
        />
      ) : (
        <ActivityIndicator style={styles.carregando} color={tokens.colors.primary} />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carregando: {
    marginTop: 48,
  },
});
