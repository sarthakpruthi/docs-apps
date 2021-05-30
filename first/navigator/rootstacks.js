import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Login from '../component/Login';
import Signup from '../component/SignUp';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/MessageScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const RootStack=()=>{

    BottomTabs = () => {
        return <MaterialBottomTabs.Navigator>
          <MaterialBottomTabs.Screen
            name="Tab1"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={'white'} size={20} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen 
            name="Tab2" 
            component={MessageScreen}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="message" color={'white'} size={20} />
              ),
            }}
          />
        </MaterialBottomTabs.Navigator>
      }

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerTransparent:true,
                    headerTitle:'',
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Messages" component={MessageScreen}  options={ {title:'Messages'} }/>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen}  
                options={ {title:"Chat"} }
                />

                <Stack.Screen name="BottomTabs" component={BottomTabs} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack