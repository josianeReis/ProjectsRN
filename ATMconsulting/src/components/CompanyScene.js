import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import NavigationBar from './NavigationBar';

const companyDetails = require('./../img/companyDetails.png');

class CompanyScene extends Component {
  render() {
    return (
      <View style={styles.allView}>
        <StatusBar
          backgroundColor='#EC7148'
        />
        <NavigationBar
          back
          navigator={this.props.navigator}
          background='#EC7148'
        />

        <View style={styles.headerContainer}>
            <Image source={companyDetails} />
          <Text style={styles.txtTitle}>A empresa</Text>
        </View>

        <View style={styles.companytDetails}>
          <Text style={styles.txtCompany}>Loren ipsum alguma coisa, Loren ipsum alguma coisa</Text>
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
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25,
  },
  companytDetails: {
    marginTop: 20,
    padding: 30,
  },
  txtCompany: {
    fontSize: 18,
  },
});

export default CompanyScene
