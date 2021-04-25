import React from 'react';
import { View, Text, FlatList, InteractionManager } from 'react-native';
import ListItem from '../components/ListItem';

const messages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/logo-red.png'),
  },
  {
    id: 2,
    title: 't1',
    description: 'd1',
    image: require('../assets/logo-red.png'),
  },
];
export default function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
}
