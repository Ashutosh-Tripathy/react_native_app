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
  ListView
} from 'react-native';



const users = [
  { name: 'Ashutosh Tripathy' },
  { name: 'Shubhangini' },
  { name: 'Suman' },
  { name: 'Satya Prakash' },
  { name: 'Vishnu Deo' },
];
export default class Component5 extends Component<{}> {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(res)
        })
      })
  }

  renderRow = (user) => {
    return (<View style={styles.row}>
      <Text style={styles.rowText}>{user.name}</Text>
    </View>);
  }

  render() {
    return (
      <ListView dataSource={this.state.userDataSource} renderRow={this.renderRow.bind(this)} />
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