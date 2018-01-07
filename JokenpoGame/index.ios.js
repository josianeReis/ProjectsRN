import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

class JokenpoGame extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultadoFinal: '',
    };
  }

  jokenpo(escolha) {
    const randomNumber = Math.floor(Math.random() * 3);
    let escolhaMaquina = '';

    switch (randomNumber) {
      case 0: escolhaMaquina = 'Pedra';
            break;
      case 1: escolhaMaquina = 'Papel';
            break;
      case 2: escolhaMaquina = 'Tesoura';
            break;
      default:
            break;
    }

    var resultado = '';

    if (escolhaMaquina === 'Pedra') {
      if (escolha === 'Pedra') {
        resultado = 'Empate';
      }
      if (escolha === 'Papel') {
        resultado = 'Usuário Ganhou';
      }
      if (escolha === 'Tesoura') {
        resultado = 'Computador Ganhou';
      }
    } else if (escolhaMaquina === 'Papel') {
      if (escolha === 'Papel') {
        resultado = 'Empate';
      }
      if (escolha === 'Pedra') {
        resultado = 'Computador Ganhou';
      }
      if (escolha === 'Tesoura') {
        resultado = 'Usuário Ganhou';
      }
    } else if (escolhaMaquina === 'Tesoura') {
      if (escolha === 'Tesoura') {
        resultado = 'Empate';
      }
      if (escolha === 'Pedra') {
        resultado = 'Usuário Ganhou';
      }
      if (escolha === 'Papel') {
        resultado = 'Computador Ganhou';
      }
    }

    this.setState({
      escolhaUsuario: escolha,
      escolhaComputador: escolhaMaquina,
      resultadoFinal: resultado,
    });
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultadoFinal}</Text>
        <Button
          title="Pedra"
          onPress={() => { this.jokenpo('Pedra'); }}
        />
        <Button
          title="Papel"
          onPress={() => { this.jokenpo('Papel'); }}
        />
        <Button
          title="Tesoura"
          onPress={() => { this.jokenpo('Tesoura'); }}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('JokenpoGame', () => JokenpoGame);
