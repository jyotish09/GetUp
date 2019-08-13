import React, { Component } from 'react';
import {
    View, StyleSheet, FlatList, Text,
    ActivityIndicator
} from 'react-native';

export default class ListItemsViewTest extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://facebook.github.io/react-native/movies.json');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, () => {
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { dataSource, isLoading } = this.state;
        console.log('isLoading > ', isLoading);
        const renderItem = isLoading ? <ActivityIndicator size="large" color="#00ff00" />
            : <FlatListTuts dataSource={dataSource} />;
        return (
            renderItem
        );
    }
}

class FlatListTuts extends Component {
    render() {
        return (
            <View style={styles.listCSS}>
                <FlatList
                    data={this.props.dataSource}
                    renderItem={({ item }) => (
                        <Text>
                            {item.title}
,
                            {' '}
                            {item.releaseYear}
                        </Text>
                    )}
                    keyExtractor={({ id }, index) => id}
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
        alignItems: 'center',
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
