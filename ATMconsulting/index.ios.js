import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import NavigationBar from './src/components/NavigationBar'

export default class ATMconsulting extends Component {
  render() {
    return (
      <View>

      <NavigationBar />
      </View>
    );
  }
}

AppRegistry.registerComponent('ATMconsulting', () => ATMconsulting);
