import { ScrollView } from 'react-native';

import { ProductSelector } from '@/components/saida-produto/product-selector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { FormularioSaida, MOTIVOS_SAIDA, Produto } from '@/models/produto';
import { styles } from './style';

type ExitFormProps = {
  produtos: Produto[];
  valores: FormularioSaida;
  salvando: boolean;
  onChange: (parcial: Partial<FormularioSaida>) => void;
  onSubmit: () => void;
};

const opcoesMotivo = MOTIVOS_SAIDA.map((motivo) => ({ label: motivo, value: motivo }));

export function ExitForm({ produtos, valores, salvando, onChange, onSubmit }: ExitFormProps) {
  return (
    <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
      <ProductSelector
        produtos={produtos}
        value={valores.produtoId}
        onChange={(produtoId) => onChange({ produtoId })}
      />
      <Input
        label="Quantidade de Saída"
        icon="package-variant-closed"
        placeholder="0"
        keyboardType="number-pad"
        value={valores.quantidade}
        onChangeText={(quantidade) => onChange({ quantidade })}
      />
      <Select
        label="Motivo da Saída"
        icon="clipboard-text-outline"
        options={opcoesMotivo}
        value={valores.motivo}
        onChange={(motivo) => onChange({ motivo })}
        placeholder="Selecione o motivo"
      />
      <Button
        label={salvando ? 'REGISTRANDO...' : 'REGISTRAR SAÍDA'}
        onPress={onSubmit}
        disabled={salvando}
      />
    </ScrollView>
  );
}
