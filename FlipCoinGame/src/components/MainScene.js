import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const logoGame = require('../img/logo.png');
const playBtn = require('../img/play_button.png');
const aboutBtn = require('../img/about_game.png');
const otherBtn = require('../img/other_games.png');

class MainScene extends Component {
  render() {
    return (
      <View style={styles.mainScene}>
        <View style={styles.gamePresentation}>
          <Image source={logoGame} />
          <TouchableHighlight>
            <Image source={playBtn} />
          </TouchableHighlight>
        </View>

        <View style={styles.footerContent}>
          <Image source={aboutBtn} />
          <Image source={otherBtn} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainScene: {
    backgroundColor: '#61BD8C',
    flex: 1,
  },
  gamePresentation: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MainScene;
