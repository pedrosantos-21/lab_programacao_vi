import {Text, View, Button,} from "react-native"
import {Link, router, useLocalSearchParams} from "expo-router";

export default function Tela1(props: any) {
    return(
        <View>
            <Button title="Avançar"
                onPress={() => router.push({pathname: '/tela2', params: {nome: 'Pedro'}})}/>
        </View>
    )
}
