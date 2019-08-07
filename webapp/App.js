import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: "http://placekitten.com/408/287"}} style={styles.image}>
          <Text style={styles.instructions}>
            Hello !
            </Text>
        </ImageBackground>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: 500,
    justifyContent: "space-around",    //  <-- you can use "center", "flex-start",
    resizeMode: "contain",             //      "flex-end" or "space-between" here
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: "transparent",
    fontSize: 25,
  },
});
