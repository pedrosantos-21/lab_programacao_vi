import React, {Pressable, StyleSheet, Text, View} from 'react-native';

export function Botao() {
    <Pressable onPress={() => console.log("Clicou!")}>
        <View style={styles.botaoContainer}>
            <Text style={styles.botaoTexto}>Botão</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    botaoContainer: {
        borderRadius: 10,
        backgroundColor: 'tomato',
        padding: 10,
    },
    botaoTexto: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
