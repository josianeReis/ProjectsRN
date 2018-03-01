import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import ClientScene from './src/components/ClientScene';
import MainScene from './src/components/MainScene';
import ContactScene from './src/components/ContactScene';
import CompanyScene from './src/components/CompanyScene';
import ServicesScene from './src/components/ServicesScene';

export default class ATMconsulting extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'mainScene' }}
        renderScene={(route, navigator) => {
          /* definir a cena com base na rota */

          switch (route.id) {
            case 'mainScene':
              return (
                <MainScene navigator={navigator} />
              );
            case 'clientScene':
              return (
                <ClientScene
                  navigator={navigator}
                />
              );
            case 'contact':
              return (
                <ContactScene
                  navigator={navigator}
                />
              );
            case 'company':
              return (
                <CompanyScene
                  navigator={navigator}
                />
              );
            case 'services':
              return (
                <ServicesScene
                  navigator={navigator}
                />
              );
            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ATMconsulting', () => ATMconsulting);
