/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch
} from 'react-native';


export default class Component3 extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "Hi Ashutosh!",
      switchValue: false
    }
  }

  onChangeText = (value) => {
    this.setState({
      textValue: value
    });
  }

  onSwitchChange = (value) => {
    console.log(`Switch value chagnee to ${value}`);
    this.setState({
      switchValue: value
    })
  }


  render() {
    return (
      <View>
        <TextInput value={this.state.textValue} placeholder="Enter text" onChangeText={(value) => this.onChangeText(value)}>
        </TextInput>
        <Text>{this.state.textValue}</Text>
        <Switch value={this.state.switchValue} onValueChange={(value) => this.onSwitchChange(value)} />
      </View>
    );
  }
}

