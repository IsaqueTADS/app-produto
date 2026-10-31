import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconeMaterial } from '@/components/ui/types';
import { tokens } from '@/constants/theme';
import { styles } from './style';

type HeaderProps = {
  icon: IconeMaterial;
  title: string;
};

export function Header({ icon, title }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
      <MaterialCommunityIcons name={icon} size={32} color={tokens.colors.primary} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
