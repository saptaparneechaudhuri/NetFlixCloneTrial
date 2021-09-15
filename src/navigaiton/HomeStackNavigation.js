import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{title: '', headerStyle: {backgroundColor: 'black'}}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
