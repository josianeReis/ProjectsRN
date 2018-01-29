import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import Item from './Item';


class ItemList extends Component {

  constructor(props) {
    super();
    this.state = {
      itemList: []
    };
  }
  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response) => {
      this.setState({
        itemList: response.data
      });
    })
    .catch(() => {
      console.log('Erro ao obter dados');
    });
  }
  render() {
    return (
      <ScrollView>
        { this.state.itemList.map(item => (
          <Item
            key={item.titulo}
            item={item}
          />
        ))}
      </ScrollView>
    );
  }
}
export default ItemList;
