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
  ListView,
  Navigator
} from 'react-native';

export default class Component6 extends Component<{}> {

  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;
    const user = params ? params.user : {};
    const a= JSON.stringify(params);
    const b= JSON.stringify(user);
    console.log(`params: ${a} \n\n user: ${b}`);
    return (
      <View>
        <Text>Name: {user.name}</Text>
        <Text>Username: {user.username}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Website: {user.website}</Text>
        <Text>Company: {user.company ? user.company.name : ""}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#a0c0f7',
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});