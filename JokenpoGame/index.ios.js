import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

class JokenpoGame extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userChoice: '',
      computerChoice: '',
      finalResult: '',
    };
  }

  jokenpo(choice) {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = '';
    var result = '';

    switch (randomNumber) {
      case 0: computerSelection = 'Pedra';
            break;
      case 1: computerSelection = 'Papel';
            break;
      case 2: computerSelection = 'Tesoura';
            break;
      default:
            break;
    }

    if (computerSelection === 'Pedra') {
      if (choice === 'Pedra') {
        result = 'Empate';
      }
      if (choice === 'Papel') {
        result = 'Usuário Ganhou';
      }
      if (choice === 'Tesoura') {
        result = 'Computador Ganhou';
      }
    } else if (computerSelection === 'Papel') {
      if (choice === 'Papel') {
        result = 'Empate';
      }
      if (choice === 'Pedra') {
        result = 'Computador Ganhou';
      }
      if (choice === 'Tesoura') {
        result = 'Usuário Ganhou';
      }
    } else if (computerSelection === 'Tesoura') {
      if (choice === 'Tesoura') {
        result = 'Empate';
      }
      if (choice === 'Pedra') {
        result = 'Usuário Ganhou';
      }
      if (choice === 'Papel') {
        result = 'Computador Ganhou';
      }
    }

    this.setState({
      userChoice: choice,
      computerChoice: computerSelection,
      resultadoFinal: result,
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.actionPanel} >
          <View style={styles.btnChoice}>
            <Button
              title="Pedra"
              onPress={() => { this.jokenpo('Pedra'); }}
            />
          </View>

          <View style={styles.btnEscolha}>
            <Button
              title="Papel"
              onPress={() => { this.jokenpo('Papel'); }}
            />
          </View>

          <View style={styles.btnEscolha}>
            <Button
              title="Tesoura"
              onPress={() => { this.jokenpo('Tesoura'); }}
            />
          </View>
        </View>
        <View style={styles.stage}>
          <Text style={styles.txtResult}>
            {this.state.resultadoFinal}
          </Text>

          <IconResult
            choice={this.state.userChoice}
            player={'Usuário'}
          />
          <IconResult
            choice={this.state.computerChoice}
            player={'Computador'}
          />
        </View>
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./src/img/jokenpo.png')} />
      </View>
    )
  }
}

class IconResult extends Component {
  render() {
    if (this.props.choice === 'Pedra') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('./src/img/pedra.png')} />
        </View>
      );
    } else if (this.props.choice === 'Papel') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('./src/img/papel.png')} />
        </View>
      );
    } else if (this.props.choice === 'Tesoura') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('./src/img/tesoura.png')} />
        </View>
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  btnChoice: {
    width: 90,
  },
  actionPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stage: {
      alignItems: 'center',
      marginTop: 10,
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  }
});
AppRegistry.registerComponent('JokenpoGame', () => JokenpoGame);
