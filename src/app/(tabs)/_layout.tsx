import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { tokens } from '@/constants/theme';

export default function TabsLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: tokens.colors.primary,
          tabBarInactiveTintColor: tokens.colors.textMuted,
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
