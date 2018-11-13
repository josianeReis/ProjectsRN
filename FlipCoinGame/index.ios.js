import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import AboutGame from './src/components/AboutGame';
import MainScene from './src/components/MainScene';
import OtherGames from './src/components/OtherGames';

export default class FlipCoinGame extends Component {
  render() {
    return (
      <Router>
        <Scene key='aboutgame' component={AboutGame} initil title="Cara ou coroa"/>
        <Scene key='mainscene' component={MainScene} />
        <Scene key='othergames' component={OtherGames} />
      </Router>
    );
  }
}

AppRegistry.registerComponent('FlipCoinGame', () => FlipCoinGame);
