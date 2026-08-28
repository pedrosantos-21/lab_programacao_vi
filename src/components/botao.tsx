import React, {Pressable, StyleSheet, Text, View} from 'react-native';

export interface BotaoProps {
    texto: string;
    onPress():void;
    cor?: string;
}
export function Botao(props: BotaoProps) {
    return ( <Pressable onPress={props.onPress}>
        <View style={[styles.botaoContainer, {backgroundColor: props.cor}]}>
            <Text style={styles.botaoTexto}>{props.texto}</Text>
        </View>
    </Pressable>)
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
