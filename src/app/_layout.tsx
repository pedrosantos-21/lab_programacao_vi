import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router/tabs';
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <>
      {/*  <StatusBar style="light" />
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
      */}

      <Tabs>
        <Tabs.Screen
          name="tela1/index"
          options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: (btn) => <MaterialIcons name="home" size={20} color={(btn.focused ? 'white' : 'black')}/>,
            tabBarActiveBackgroundColor: 'tomato',
            tabBarInactiveBackgroundColor: 'yellow',
            tabBarActiveTintColor: 'white'
            }}/>
        <Tabs.Screen name="tela2/index"
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: (btn) => <MaterialIcons name="favorite" size={20}/>
            }} />
        <Tabs.Screen name="tela3/index"
        options={{ tabBarLabel: 'Configurações', tabBarIcon: () => <MaterialIcons name="settings" size={20}/>}}  />
      </Tabs>
    </>
  );
}