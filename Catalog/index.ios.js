import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import ItemList from './src/components/ItemList';

export default class Catalog extends Component {
  render() {
    return (
      <ItemList />
    );
  }
}

AppRegistry.registerComponent('Catalog', () => Catalog);
