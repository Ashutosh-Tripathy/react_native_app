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
  TouchableHighlight
} from 'react-native';


export default class Component1 extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ashutosh",
      message: this.props.message
    }
  }

  onViewPress = () => {
    console.log("View pressed.");
  }

  render() {
    let { message, name } = this.state;

    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>
            This is text message.
            </Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.v1} onPress={this.onViewPress}>
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.v2}>
            <Text>
              View 2
            </Text>
          </View>
          <View style={styles.v3}>
            <Text>
              View 3
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'yellow'
  },
  myText: {
    color: 'red'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 10
  }
});
