import React, { Component } from 'react';
import {
    Button, View,
    StyleSheet, Text
} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import firebaseApp from '../firebase';
import {
    getTokenForPushNotificationsAsync, alertTimeFn,
    nodeId
} from '../utils';
import messagePack from '../assets/messages';

const expoTokenID = getTokenForPushNotificationsAsync();

/* Just to get an empty row between elements */
class EmptyRow extends Component {
    render() {
        return (
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 15,
                }}
            />
        );
    }
}

export default class SimpleTimeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
        };
        this.itemsRef = firebaseApp.database();
    }

  /* On click of notify me at a particular time button */
  submitDetails = () => {
      /* Data to be pushed at a node under userDetails */
      const payload = {
          updatedTimeStamp: alertTimeFn(this.state),
          expoTokenID: JSON.stringify(expoTokenID)
      };

      /* Update with the payload into Firebase */
      this.itemsRef.ref(`/userDetails/expoDeviceIDs/${nodeId(expoTokenID)}`)
          .update(payload, (error) => {
              if (!error) console.log('Item created / updated in firebase');
              else console.warn('There was an error creating / updating in the database, error : ', error);
          });
  };

  render() {
      return (
          <View style={styles.containerView}>
              <Text style={styles.colonFont}>{messagePack.alertTime}</Text>
              <EmptyRow />
              <View style={styles.justifyContents}>
                  <NumericInput
                      type="plus-minus"
                      onChange={(value) => this.setState({ hour: value })}
                      totalWidth={100}
                      totalHeight={50}
                      step={1}
                      minValue={0}
                      maxValue={24}
                      valueType="real"
                      rounded
                      textColor="#B0228C"
                      iconStyle={{ color: 'black' }}
                  />

                  <Text style={styles.colonFont}> : </Text>

                  <NumericInput
                      type="plus-minus"
                      onChange={(value) => this.setState({ minute: value })}
                      totalWidth={100}
                      totalHeight={50}
                      step={1}
                      minValue={0}
                      maxValue={59}
                      valueType="real"
                      rounded
                      textColor="#B0228C"
                      iconStyle={{ color: 'black' }}
                  />
              </View>
              <EmptyRow />
              <Button title={messagePack.submitButtonMessage} onPress={this.submitDetails} />
          </View>
      );
  }
}

let styles = StyleSheet.create({
    containerView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    justifyContents: {
        flexDirection: 'row'
    },
    colonFont: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        marginTop: 3
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        width: 140,
        padding: 5,
        borderRadius: 8
    },
});
