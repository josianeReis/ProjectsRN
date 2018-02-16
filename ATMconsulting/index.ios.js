import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import ClientScene from './src/components/ClientScenes'

export default class ATMconsulting extends Component {
  render() {
    return (
      <View>
        <ClientScene />
      </View>
    );
  }
}

AppRegistry.registerComponent('ATMconsulting', () => ATMconsulting);
