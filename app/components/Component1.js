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
  render() {
    return (
      <View>
        <Text>
            {this.props.message}           
        </Text>
      </View>
    );
  }
}
