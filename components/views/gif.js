import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';

export default function Gif({ navigation }) {

    return (
        <View style={styles.container} >
            <Text>Eu avisei! rsrsrs</Text>
            <Image style={styles.logo} source={require('../../public/mamoa-jason.gif')} />
            <Button
                title="Nome"
                onPress={() =>
                    navigation.navigate('Nome')
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