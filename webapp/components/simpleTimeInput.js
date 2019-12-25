import React, { Component } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import NumericInput from 'react-native-numeric-input'

export default class SimpleTimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  saveTime = () => {
    console.log("Save Time as per the user's wish");
    this.setState({ isDateTimePickerVisible: true });
  };
  render() {
    return (
      <View style={styles.buttonCss}>
        <NumericInput type='up-down' onChange={value => console.log(value)} />
        <Text> : </Text>
        <View
            style={{
                borderBottomColor: 'white',
                borderBottomWidth: 15,
            }} />
        <Button title="Notify me @ this time" onPress={this.saveTime} />
      </View>
    );
  }
}

let styles = StyleSheet.create({buttonCss:
    {position: 'absolute', top: 0, left: 0, right: 0,
    bottom: 0, justifyContent: 'center', alignItems: 'center'}
});