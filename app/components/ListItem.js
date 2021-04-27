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

export default function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainers}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
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
  detailsContainers: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});
