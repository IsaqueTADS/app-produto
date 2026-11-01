import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabButton } from '@/components/ui/tab-button';
import { tokens } from '@/constants/theme';

const ALTURA_BARRA = 64;

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: tokens.colors.primary,
          tabBarInactiveTintColor: tokens.colors.textMuted,
          tabBarButton: TabButton,
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { flex: 1 },
          tabBarStyle: { height: ALTURA_BARRA + insets.bottom },
          sceneStyle: { backgroundColor: tokens.colors.background },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Novo Produto',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="package-variant-plus" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="saida"
          options={{
            title: 'Saída',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="package-variant-minus" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="estoque"
          options={{
            title: 'Estoque',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="warehouse" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
