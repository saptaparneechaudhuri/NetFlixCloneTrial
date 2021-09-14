/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';
// import BottomTabNavigator from './src/navigaiton/BottomTabNavigation';
// import HomeScreen from './src/screens/HomeScreen';
import MainNavigation from './src/navigaiton/MainNavigation';
import {Appearance} from 'react-native';

const App = () => {
  Appearance.getColorScheme();
  const colorTheme = useColorScheme();

  return (
    <View style={styles.container}>
      <MainNavigation />
      {/* <Text>{colorTheme}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
