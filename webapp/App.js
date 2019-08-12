import React, { Component } from 'react';
import {
    View, StyleSheet, FlatList, Text,
    SectionList
} from 'react-native';

export default class ListItemsViewTest extends Component {
    render() {
        return (
            <SectionListBasics />
        );
    }
}

class FlatListTuts extends Component {
    render() {
        return (
            <View style={styles.listCSS}>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dustin' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

class SectionListBasics extends Component {
    render() {
        return (
            <View style={styles.listCSS}>
                <SectionList
                    sections={[
                        { title: 'D', data: ['Devin', 'Dustin', 'Dominic'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] }
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
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
    },
    listCSS: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: 'center',
        marginTop: '10%',
        width: '100%'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    }
});
