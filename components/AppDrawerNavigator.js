import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import BookDonateScreen from '../screens/BookDonateScreen';

export const AppDrawerNavigator =createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    MyDonations: {
        screen: MyDonationScreen
    },
    Settings: {
        screen: SettingScreen
    },
    Notifications: {
        screen: NotificationScreen
    },
   
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: 'Home'
})