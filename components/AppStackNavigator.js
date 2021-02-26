import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';
import {Image} from 'react-native';

export const AppStackNavigator =createStackNavigator({
    DonateBooks: {
        screen: BookDonateScreen,
        navigationOptions: {
            headerShown: false,
         
        }
    },
    ReceiverDetails: {
        screen: ReceiverDetailsScreen,
        navigationOptions: {
            headerShown: false,
         
        }
    },
    
},
{
    initialRouteName: 'DonateBooks'
}
)