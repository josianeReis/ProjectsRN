import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

 class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.picture}>
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: this.props.item.foto }}
          />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.txtTitle}>{this.props.item.titulo}</Text>
          <Text style={styles.txtValue}>R$ {this.props.item.valor}</Text>
          <Text style={styles.txtDetails}>Local: {this.props.item.local_anuncio}</Text>
          <Text style={styles.txtDetails}>Dt anúncio {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    marginBottom: 2,
    padding: 10,
    flexDirection: 'row',
  },
  picture: {
    width: 102,
    height: 102,
  },
  itemDetails: {
    marginLeft: 20,
    flex: 1,
  },
  txtTitle: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  txtValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtDetails: {
    fontSize: 16,
  },
});

export default Item;
