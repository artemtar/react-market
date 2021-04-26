import React from 'react';
import {
  View,
  Text,
  FlatList,
  InteractionManager,
  StyleSheet,
} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

import Screen from '../components/Screen';

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
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {}}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
