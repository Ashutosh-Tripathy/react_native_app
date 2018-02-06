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
  Button
} from 'react-native';


export default class Component1 extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ashutosh",
      message: this.props.message || "This is home page."
    }
  }

  render() {
    let { message, name } = this.state;

    return (
      <View>
        <View style={styles.row}>
          <Button
            style={styles.rowButton}
            title="Component 2"
            onPress={() => this.props.navigation.navigate('Component2')}
          />
          <Button
            style={styles.rowButton}
            title="Component 3"
            onPress={() => this.props.navigation.navigate('Component3')}
          />
        </View>

        <View style={styles.row}>
          <Button
            style={styles.rowButton}
            title="Component 4"
            onPress={() => this.props.navigation.navigate('Component4')}
          />
          <Button
            style={styles.rowButton}
            title="Component 5"
            onPress={() => this.props.navigation.navigate('Component5')}
          />
        </View>
        <View>
          <Text>
            {message}
          </Text>
          <Text>
            {name}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#a0c0f7',
    marginBottom: 3,
    justifyContent: 'space-around',
  },
  rowButton: {
  }
});