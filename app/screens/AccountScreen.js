import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';

const menuItems = [
  {
    title: 'My listing',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Artem"
          subTitle="artem@artem.ar"
          image={require('../assets/logo-red.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.name}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="logout"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
