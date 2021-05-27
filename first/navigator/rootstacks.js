import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../component/Login';
import Signup from '../component/SignUp';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/MessageScreen';
import HomeScreen from '../screens/HomeScreen';
import MainTabScreen from '../screens/MainTabScreen';

const Stack=createStackNavigator()

const RootStack=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyled:{
                        backgroundColor:'transparent'
                    },
                    headerTransparent:true,
                    headerTitle:'',
                    headerLeftContainerStyle:{
                        paddingLeft:20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Messages" component={MessageScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
                <Stack.Screen 
                name="Chat" 
                component={ChatScreen}  
                    options={({route}) =>({
                        title:route.params.userName
                     } ) 
                    }
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack