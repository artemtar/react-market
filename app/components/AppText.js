import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function AppText({ children, style }) {
  return <Text style={[style.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Times',
  },
});
