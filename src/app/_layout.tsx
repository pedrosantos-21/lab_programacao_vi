import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from "expo-router/tabs"

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: true,
          animation: 'fade_from_bottom',
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: 'blue',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home', headerStyle: { backgroundColor: 'grey' } }} />
        <Stack.Screen name="tela1" options={{ title: 'Tela 1', headerStyle: { backgroundColor: 'orange' } }} />
        <Stack.Screen name="tela2" options={{ title: 'Tela 2', headerStyle: { backgroundColor: 'green' } }} />
        <Stack.Screen name="tela3" options={{ title: 'Tela 3', headerStyle: { backgroundColor: 'purple' } }} />
      </Stack>

      <Tabs>
        <Tabs.Screen name="tela1/index"/>
        <Tabs.Screen name="tela2/index"/>
        <Tabs.Screen name="tela3/index"/>
      </Tabs>
    </>
  );
}