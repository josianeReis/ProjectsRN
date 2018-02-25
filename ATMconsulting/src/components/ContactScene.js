import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import NavigationBar from './NavigationBar';

const contactDetails = require('./../img/contactDetails.png');

class ContactsScene extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#CCC'
        />
        <NavigationBar
          back
          navigator={this.props.navigator}
        />

        <View style={styles.headerContainer}>
            <Image source={contactDetails} />
          <Text style={styles.txtTitle}>Contato</Text>
        </View>

        <View style={styles.contactDetails}>
          <Text style={styles.txtContact}>TEL: (34) 9191-8484</Text>
          <Text style={styles.txtContact}>CEL: (34) 1212-1313</Text>
          <Text style={styles.txtContact}>
            E-MAIL: contato@atmconsulting.com.br
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txtTitle: {
    fontSize: 30,
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25,
  },
  contactDetails: {
    marginTop: 20,
    padding: 30,
  },
  txtContact: {
    fontSize: 18,
  },
});

export default ContactsScene
