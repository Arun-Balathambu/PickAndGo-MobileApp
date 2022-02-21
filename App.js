import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Screens/Home";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Track from "./Screens/Track";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Track" component={Track} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
