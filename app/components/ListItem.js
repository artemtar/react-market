import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import ListItemDeleteItem from './ListItemDeleteItem';

const LeftActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}
    >
      <Text
        style={{
          color: 'white',
          paddingHorizontal: 10,
          fontWeight: '600',
        }}
      >
        Left Action
      </Text>
    </View>
  );
};

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={ListItemDeleteItem}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 8,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});
