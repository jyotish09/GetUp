import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={styles.alignItems}>
                <View style={styles.powderBlue} />
                <View style={styles.skyBlue} />
                <View style={styles.steelBlue} />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    flexColumnCSS: {
        flex: 1, flexDirection: 'column', marginTop: '10%'
    },
    flexRowCSS: {
        flex: 1, flexDirection: 'row', marginTop: '10%'
    },
    justifyContents: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around', /* space-between, space-around, center, flex-end, flex-start */
        marginTop: '10%'
    },
    alignItems: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center' /* stretch, center, flex-end, flex-start */
    },
    powderBlue: {
        width: 75, height: 75, backgroundColor: 'powderblue'
    },
    skyBlue: {
        width: 75, height: 75, backgroundColor: 'skyblue'
    },
    steelBlue: {
        width: 75, height: 75, backgroundColor: 'steelblue'
    }
});
