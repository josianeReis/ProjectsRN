import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

class JokenpoGame extends Component {

  constructor(props) {
    super(props);

    this.state = {
      texto: 'texto teste 2'
    };
  }

  changeText() {
    this.setState({ texto: 'texto mudado com setState' });
  }

  render() {
    return (
      <View>
        <MyComponent
          teste={this.state.texto}
        />
        <Button
          title="Botao teste"
          onPress={() => { this.changeText(); }}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('JokenpoGame', () => JokenpoGame);
