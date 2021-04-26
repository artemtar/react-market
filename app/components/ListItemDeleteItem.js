import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function ListItemDeleteItem({ onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: 'center',
  },
});
