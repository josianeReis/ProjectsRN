import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

class IconResult extends Component {
  render() {
    if (this.props.choice === 'Pedra') {
      return (
        <View>
          <Text style={styles.txtPlayer}>{this.props.player}</Text>
          <Image source={require('./../img/pedra.png')} />
        </View>
      );
    } else if (this.props.choice === 'Papel') {
      return (
        <View>
          <Text style={styles.txtPlayer}>{this.props.player}</Text>
          <Image source={require('./../img/papel.png')} />
        </View>
      );
    } else if (this.props.choice === 'Tesoura') {
      return (
        <View>
          <Text style={styles.txtPlayer}>{this.props.player}</Text>
          <Image source={require('./../img/tesoura.png')} />
        </View>
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  txtPlayer: {
    fontSize: 18
  },
  icon: {
    alignItems: 'center',
    marginBottom: 20,
  }
});

export default IconResult;
