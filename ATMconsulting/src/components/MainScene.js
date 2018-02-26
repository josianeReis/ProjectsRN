import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import NavigationBar from './NavigationBar';

const logo = require('./../img/logo.png');
const myClient = require('./../img/myClient.png');
const contactMenu = require('./../img/contactMenu.png');
const companyMenu = require('./../img/companyMenu.png');
const myServices = require('./../img/myServices.png');

class MainScene extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#CCC'
        />
        <NavigationBar />

        <View style={styles.containerLogo}>
          <Image source={logo} />
        </View>
        <View style={styles.containerMenu}>
          <View style={styles.menuItems}>

            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'clientScene' });
              }}
            >
              <Image style={styles.imgMenu} source={myClient} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'contato' });
              }}
            >
              <Image style={styles.imgMenu} source={contactMenu} />
            </TouchableHighlight>

          </View>
          <View style={styles.menuItems}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'company' });
              }}
            >
              <Image style={styles.imgMenu} source={companyMenu} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'services' });
              }}
            >
              <Image style={styles.imgMenu} source={myServices} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogo: {
    marginTop: 30,
    alignItems: 'center',
  },
  menuItems: {
    flexDirection: 'row',
  },
  imgMenu: {
    margin: 15,
  },
  containerMenu: {
    alignItems: 'center',
  },
});

export default MainScene
