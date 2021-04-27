import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  InteractionManager,
  StyleSheet,
} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteItem from '../components/ListItemDeleteItem';
import ListItemSeparator from '../components/ListItemSeparator';

import Screen from '../components/Screen';

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  const [refreshing, setRefreshing] = useState(false);
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
            onRefresh={() => {}}
            renderRightActions={() => (
              <ListItemDeleteItem onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
