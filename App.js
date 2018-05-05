import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class App extends Component {
  render() {

    const Decks = () => (
      <View style={styles.container}>

        <FlatList data={[{key: 'deck one ', num: '3 cards'}, {key: 'deck two ', num: '1 cards'}]} renderItem={({item}) => <Text style={styles.item}>{item.key}{ item.num}</Text>} />

      </View>
    );

    const NewDeck = () => (
      <View>
        <Text>NewDeck!</Text>
      </View>
    );

    const Tabs = TabNavigator({
      Decks: {
        screen: Decks
      },
      NewDeck: {
        screen: NewDeck
      },
    });

    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
