import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket',
    price: 80,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch',
    price: 180,
    image: require('../assets/couch.jpg'),
  },
];
export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 16,
    backgroundColor: colors.light,
  },
  image: {},
});
