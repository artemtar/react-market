import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from './app/components/AppButton';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import colors from './app/config/colors';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHight : 0,
  },
});
