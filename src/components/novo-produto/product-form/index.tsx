import { ScrollView } from 'react-native';

import { ProductFields } from '@/components/novo-produto/product-fields';
import { Button } from '@/components/ui/button';
import { FormularioProduto } from '@/models/produto';
import { styles } from './style';

type ProductFormProps = {
  valores: FormularioProduto;
  salvando: boolean;
  onChange: (parcial: Partial<FormularioProduto>) => void;
  onSubmit: () => void;
};

export function ProductForm({ valores, salvando, onChange, onSubmit }: ProductFormProps) {
  return (
    <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
      <ProductFields valores={valores} onChange={onChange} />
      <Button
        label={salvando ? 'SALVANDO...' : 'CADASTRAR PRODUTO'}
        onPress={onSubmit}
        disabled={salvando}
      />
    </ScrollView>
  );
}
