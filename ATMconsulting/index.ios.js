import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import ClientScene from './src/components/ClientScene';
import MainScene from './src/components/MainScene';
import ContactScene from './src/components/ContactScene';

export default class ATMconsulting extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'mainScene' }}
        renderScene={(route, navigator) => {
          /* definir a cena com base na rota */

          if (route.id === 'mainScene') {
            //exibe cena principal
            return (
              <MainScene navigator={navigator} />
            );
          }

          if (route.id === 'clientScene') {
            //exibe cena clientes
            return (
              <ClientScene
                navigator={navigator}
              />
            );
          }

          if (route.id === 'contato') {
            return (
              <ContactScene
                navigator={navigator}
              />
            );
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ATMconsulting', () => ATMconsulting);
