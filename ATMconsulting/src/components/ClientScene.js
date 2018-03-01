import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import NavigationBar from './NavigationBar';

const clientDetails = require('./../img/clientDetails.png');
const client1 = require('./../img/client1.png');
const client2 = require('./../img/client2.png');

class ClientScene extends Component {
  render() {
    return (
      <View style={styles.allView}>
        <StatusBar
          backgroundColor='#B9C941'
        />
        <NavigationBar
          back
          navigator={this.props.navigator}
          background='#B9C941'
        />

        <View style={styles.headerContainer}>
            <Image source={clientDetails} />
          <Text style={styles.txtTitle}>Nossos Clientes</Text>
        </View>

        <View style={styles.clientDetails}>
          <Image source={client1} />
          <Text style={styles.txtClient}>Lorem ipsum dolor sit amet</Text>
        </View>
        <View style={styles.clientDetails}>
          <Image source={client2} />
          <Text style={styles.txtClient}>Lorem ipsum dolor</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txtTitle: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25,
  },
  clientDetails: {
    padding: 20,
    marginTop: 10,
  },
  txtClient: {
    fontSize: 18,
    marginLeft: 20,
  },

});

export default ClientScene
