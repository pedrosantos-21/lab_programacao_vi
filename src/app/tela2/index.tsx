import { useLocalSearchParams } from "expo-router"
import {Text, View} from "react-native"


export default function Tela2(props: any) {
    
    const {nome} = useLocalSearchParams();
    
    return(
        <View>
            <Text>Nome: {nome}</Text>
        </View>
    );
}
