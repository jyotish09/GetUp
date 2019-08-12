import React, { Component } from 'react';
import {
    StyleSheet, Text, View, ImageBackground,
} from 'react-native';

export default class DisplayAnImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://w.wallhaven.cc/full/xl/wallhaven-xll76z.jpg' }}
                    style={styles.image}
                >
                    <Text style={styles.instructions}>
                        Hello !
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    image: {
        height: 500,
        justifyContent: 'space-around',
        resizeMode: 'contain',
    },
    instructions: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 25,
    },
});
