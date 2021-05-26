import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Colors } from '../components/style.js'

// const {primary,tertiary}=Colors

import Login from '../component/Login'
import Signup from '../component/SignUp'
import App from '../App';

const Stack=createStackNavigator()

const RootStack=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyled:{
                        backgroundColor:'transparent'
                    },
                    // headerTintColor:tertiary,
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
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack