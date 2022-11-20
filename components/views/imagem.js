import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';

export default function Imagem({ navigation }) {

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../../public/Cute-panda.jpg')} />
            <Text>Clique aqui por sua conta e risco</Text>
            <Button
                title="Gif"
                onPress={() =>
                    navigation.navigate('Gif')
                }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        height: 300,
    },
});