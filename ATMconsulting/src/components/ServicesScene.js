import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import NavigationBar from './NavigationBar';

const serviceDetails = require('./../img/serviceMenu.png');

class ServicesScene extends Component {
  render() {
    return (
      <View style={styles.allView}>
        <StatusBar
          backgroundColor='#19D1C8'
        />
        <NavigationBar
          back
          navigator={this.props.navigator}
          background='#19D1C8'
        />

        <View style={styles.headerContainer}>
            <Image source={serviceDetails} />
          <Text style={styles.txtTitle}>Nossos Serviços</Text>
        </View>

        <View style={styles.serviceDetails} >
          <Text style={styles.txtDetails}>. Consultoria</Text>
          <Text style={styles.txtDetails}>. Processos</Text>
          <Text style={styles.txtDetails}>. Acompanhamento de Projetos</Text>
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
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25,
  },
  serviceDetails: {
    marginTop: 20,
    padding: 30,
  },
  txtDetails: {
    fontSize: 18,
  },
});

export default ServicesScene
