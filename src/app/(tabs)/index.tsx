import { useRef, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { ProductForm } from '@/components/novo-produto/product-form';
import { Header } from '@/components/ui/header';
import { FormularioProduto, interpretarProduto } from '@/models/produto';
import { cadastrarProduto, mensagemDeErro } from '@/services/produtos';

const formularioVazio: FormularioProduto = {
  nome: '',
  preco: '',
  quantidade: '',
  estoqueMinimo: '',
};

export default function NovoProdutoScreen() {
  const [valores, setValores] = useState(formularioVazio);
  const [salvando, setSalvando] = useState(false);
  const enviando = useRef(false);

  const handleChange = (parcial: Partial<FormularioProduto>) => {
    setValores((atual) => ({ ...atual, ...parcial }));
  };

  const handleCadastrar = async () => {
    if (enviando.current) return;

    const resultado = interpretarProduto(valores);

    if (!resultado.ok) {
      Alert.alert('Atenção', resultado.erro);
      return;
    }

    enviando.current = true;
    setSalvando(true);

    try {
      await cadastrarProduto(resultado.valor);
      setValores(formularioVazio);
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
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
      <Header icon="package-check" title="Novo Produto" />
      <ProductForm
        valores={valores}
        salvando={salvando}
        onChange={handleChange}
        onSubmit={handleCadastrar}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
