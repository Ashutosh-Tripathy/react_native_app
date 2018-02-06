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
    return (
      <View>
        <Text style={styles.row}>Name: {user.name}</Text>
        <Text style={styles.row}>Username: {user.username}</Text>
        <Text style={styles.row}>Email: {user.email}</Text>
        <Text style={styles.row}>Phone: {user.phone}</Text>
        <Text style={styles.row}>Website: {user.website}</Text>
        <Text style={styles.row}>Company: {user.company ? user.company.name : ""}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#8ae587',
    marginBottom: 3
  },
});