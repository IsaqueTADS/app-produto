import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from 'expo-router';

import { Produto } from '@/models/produto';
import { listarProdutos, mensagemDeErro } from '@/services/produtos';

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);

  useFocusEffect(
    useCallback(() => {
      let ativo = true;

      listarProdutos()
        .then((lista) => {
          if (ativo) setProdutos(lista);
        })
        .catch((erro) => Alert.alert('Erro', mensagemDeErro(erro)));

      return () => {
        ativo = false;
      };
    }, [])
  );

  return { produtos, setProdutos };
}
