import React from 'react';
import { View, Text, Platform } from 'react-native';
import { defaultStyle } from '../config/defaultStyle';

export default function AppText({ children, style }) {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}
