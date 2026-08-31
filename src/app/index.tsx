import {StyleSheet, Text, View, Button} from "react-native";
import {Link, router, useLocalSearchParams} from "expo-router";

export default function Home(props: any) {
    
    const {nome} = useLocalSearchParams()
    
    return(
        <View style = {styles.container}>
            <Link href={{pathname: '/tela1', params:{nome:'Pedro'}}} >
                <Text>Clique-me para ir para tela 1 usando Link</Text>
            </Link>
            <Button title="Clique-me para ir para tela 2 usando router" onPress={() => router.push({pathname: '/tela2', params: {nome:'Pedro'}})} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});