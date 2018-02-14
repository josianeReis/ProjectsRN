import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class NavigationBar extends Component {
  render() {
    return (
      <View style={styles.titleBar}>
        <Text style={styles.title}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBar: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  }
});

export default NavigationBar
