import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import Topo from './src/components/Topo';
import IconResult from './src/components/IconResult';

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

          <View style={styles.btnChoice}>
            <Button
              title="Papel"
              onPress={() => { this.jokenpo('Papel'); }}
            />
          </View>

          <View style={styles.btnChoice}>
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
            player={'Você'}
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
  },
});
AppRegistry.registerComponent('JokenpoGame', () => JokenpoGame);
