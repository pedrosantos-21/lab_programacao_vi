import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export interface LoginscreenProps {
}

export function Loginscreen(props: LoginscreenProps) {
  return (
    <ImageBackground source={require('../../assets/imgs/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.logo}>Teste de branch</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1,width: '100%', height: '100%'},
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo: {color: 'white', fontSize: 50,textAlign: 'center',
  },
});
