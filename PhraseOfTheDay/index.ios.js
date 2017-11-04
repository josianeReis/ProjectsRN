import React from 'react';
import {
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 30,
  },
  titleButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

const getNewPhrase = () => {
  var randomNumber = Math.floor(Math.random() * 10);

  var phrases =
    ['O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo.',
     'O pessimismo é humor; o otimismo é vontade.',
     'O pessimismo torna os homens cautelosos, enquanto, o otimismo torna os homens imprudentes.',
     'Uma pessoa inteligente resolve um problema, um sábio o previne.',
     'Que todo mal vire amor, que toda dor vire flor.',
     'Imagine uma nova história para sua vida e acredite nela.',
     'Se for pra ser, será. Se tá demorando, é porque o melhor ainda está por vir.',
     'E que nunca nos falte a esperança de dias melhores.',
     'E que venham novas histórias, novos sorrisos e novas pessoas.',
     'Não acumule o que escurece a alma e amarela o sorriso. Acumule o que perfuma a vida!',
    ];

  Alert.alert(phrases[randomNumber]);
}

const App = () => {
  return (
    <View style={Styles.container} >
      <Image source={require('./src/img/logo.png')} />

      <TouchableOpacity
        onPress={getNewPhrase}
        style={Styles.button}>
        <Text style={Styles.titleButton}> Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('PhraseOfTheDay', () => App);
