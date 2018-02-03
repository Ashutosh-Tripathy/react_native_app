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
  View
} from 'react-native';


export default class Component1 extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
        name: "Ashutosh",
        message: this.props.message
    }
  }

  render() {
    let {message, name} = this.state;

    return (
      <View>
         <Text>
            {message}           
        </Text> 
        <Text>
            {name}           
        </Text>
      </View>
    );
  }
}
