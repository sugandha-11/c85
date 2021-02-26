import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {AppTabNavigator} from './components/AppTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import {AppStackNavigator} from './components/AppStackNavigator';


export default function App() {
  return (
    <SafeAreaProvider>
    <AppContainer/>
    </SafeAreaProvider>
  );
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: AppDrawerNavigator},
  Stack: {screen: AppStackNavigator}
})

const AppContainer= createAppContainer(switchNavigator);