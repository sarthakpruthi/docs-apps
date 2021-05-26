import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground , Image, TextInput, Dimensions, TouchableOpacity, Button} from 'react-native';


import img from '../assets/doc.jpg'
import logo from '../assets/logo.png'
// import SignUp from "./SignUp";

const {width:WIDTH}=Dimensions.get('window')

const login = () =>{
    
        return(
            <ImageBackground source={img} style={styles.backgroundcontainer}>
               
                <View style={styles.logocontainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logotext}>Docs-App</Text>
                </View>
                
                <View  style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'black'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View  style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'black'}
                        underlineColorAndroid='transparent'
                    />
                </View>
            
            
            <TouchableOpacity style={styles.btnlogin}
                onPress={() => {
                    alert('Logged In');
                }}
            >
                <Text style={styles.logintext}> Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnsignup}  
                onPress={() => {
                    // <SignUp/>
                }}
            >
                <Text style={styles.signuptext}> Sign Up</Text>
            </TouchableOpacity>

            </ImageBackground>
        );
    }

const styles = StyleSheet.create({
    backgroundcontainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center',
    },
    logocontainer:{
        alignItems:'center',
        marginBottom:50
    },
    logo:{
        width:120,
        height:120
    },
    logotext:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        marginTop:10,
        opacity:1.0
    },
    inputcontainer:{
        marginTop:20
    },
    input:{
        width:WIDTH-55,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'rgba(0,0,0,0.28)',
        color:'white',
        marginHorizontal:25
    },
    btnlogin:{
        width:WIDTH-55,
        height:45,
        borderRadius:25,
        backgroundColor:'red',
        justifyContent:'center',
        marginTop:20
    },
    btnsignup:{
        width:WIDTH-55,
        height:45,
        justifyContent:'center',
        marginTop:15
    },
    logintext:{
        color:'white',
        fontSize:16,
        textAlign:'center'
    },
    signuptext:{
        color:'black',
        fontWeight:'bold',
        fontSize:19,
        textAlign:'center'
    }
}
)

export default login;