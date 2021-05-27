import React from "react-native";

import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/ChatScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabScreen = () =>(
<NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        />
        <Tab.Screen
        name="Messages"
        component={MessageScreen}
        />
    </Tab.Navigator>
</NavigationContainer>
);

export default MainTabScreen;