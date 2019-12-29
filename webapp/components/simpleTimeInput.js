import React, { Component } from "react";
import { Button, View,
    StyleSheet, Text,
    TextInput } from "react-native";
import NumericInput from 'react-native-numeric-input';
import getTokenForPushNotificationsAsync from '../utils';
import {message_pack} from '../assets/messages';

import firebaseApp from '../firebase';

class EmptyRow extends Component {
    render() {
        return (
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 15,
                }} />
        );
    }
}

export default class SimpleTimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute: 0,
      handle: ''
    };
    this.itemsRef = firebaseApp.database();
  }

  submitDetails = () => {
    const item = JSON.stringify({
      userDetails: this.state,
      expoToken: getTokenForPushNotificationsAsync()});
    this.itemsRef.ref(`/userDetails/`)
      .push(item, error => {
        if (!error)
            console.log("Item added to firebase");
        else
            console.warn("There was an error writing to the database, error");
    });
  };

  render() {
    return (
      <View style={styles.containerView}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({handle: text})}
            value={this.state.handle}
            underlineColorAndroid = "transparent"
            placeholder = {message_pack.handlePlaceholder}
            placeholderTextColor = "grey"
            autoCapitalize = "none"
            />
        <Text style={styles.colonFont}>{message_pack.alertTime}</Text>
        <EmptyRow />
        <View style={styles.justifyContents}>
            <NumericInput type='plus-minus' onChange={value => this.setState({hour: value})}
            totalWidth={100} 
            totalHeight={50} 
            step={1}
            minValue={0}
            maxValue={24}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'black' }} />

            <Text style={styles.colonFont}> : </Text>

            <NumericInput type='plus-minus' onChange={value => this.setState({minute: value})}
            totalWidth={100} 
            totalHeight={50} 
            step={1}
            minValue={0}
            maxValue={59}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'black' }} />
        </View>
        <EmptyRow />
        <Button title={message_pack.submitButtonMessage} onPress={this.submitDetails} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
    containerView: {
        position: 'absolute', top: 0, left: 0, right: 0,
    bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    justifyContents: {
        flexDirection: 'row'
    },
    colonFont: {
        justifyContent: 'center', alignItems: 'center',
        fontSize: 25,
        marginTop: 3
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1,
       width: 140,
       borderColor: 'gray',
       borderWidth: 1,
       padding: 5,
       borderRadius: 8 
    },
});