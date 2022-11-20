import { View, Text } from 'react-native';
import { StyleSheet, Button } from 'react-native';


export default function Nome({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Heitor T. N. Pereira</Text>
            <Button
                title="Imagem"
                onPress={() =>
                    navigation.navigate('Imagem')
                }
            />
        </View >
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
