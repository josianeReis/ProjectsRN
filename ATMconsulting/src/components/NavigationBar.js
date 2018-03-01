import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const btnBack = require('./../img/btn_back.png');

class NavigationBar extends Component {
  render() {
    if (this.props.back) {
      return (
        <View
          style={[styles.titleBar, { backgroundColor: this.props.background }]}
        >
          <TouchableHighlight
            underlayColor={this.props.background}
            activeOpacity={0.3}
            onPress={() => {
              this.props.navigator.pop();
            }}
          >
            <Image source={btnBack} />
          </TouchableHighlight>
          <Text style={styles.title}>ATM Consultoria</Text>
        </View>
      );
    }
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
    flexDirection: 'row',
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
