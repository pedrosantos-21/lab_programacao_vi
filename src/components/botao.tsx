import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export interface BotaoProps {
    texto: string;
    onPress():void;
    cor?: string;
}
export function Botao({texto, cor, onPress} : BotaoProps) {
        console.log('Recriado!')
        return ( <TouchableOpacity onPress={onPress}>
        <View style={[styles.botaoContainer, {backgroundColor: cor}]}>
            <Text style={styles.botaoTexto}>{texto}</Text>
        </View>
    </TouchableOpacity>)
}

export default React.memo(Botao);

Botao.deafaultProps = {
    cor:'tomato'
}

const styles = StyleSheet.create({
    botaoContainer: {
        borderRadius: 10,
        padding: 10,
    },
    botaoTexto: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
