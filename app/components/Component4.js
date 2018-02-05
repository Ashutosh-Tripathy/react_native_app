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
export default class Component4 extends Component<{}> {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
  renderRow = (user) => {
    return (<View style={styles.myView}>
      <Text>{user.name}</Text>
    </View>);
  }

  render() {
    return (
      <ListView dataSource={this.state.userDataSource} renderRow={this.renderRow.bind(this)} />
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: '#a0c0f7',
    height: 30,
    padding: 5,

  }
});