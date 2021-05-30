import React, {Component} from 'react';
import  {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground , Image, TextInput, Dimensions, TouchableOpacity, Button} from 'react-native';
// import {Picker} from '@react-native-picker/picker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



import img from '../assets/doc.jpg'
import logo from '../assets/logo.png'

const {width:WIDTH}=Dimensions.get('window')

const signup = ({navigation}) =>{
    
        // const[ pickerValue, setPickerValue ] = useState('Doctor');

        let names = '', emails = '', passwords = ' ', types = 'doctor';

        const saveUserName = username => {
            names = username;
        };
        const saveUserEmail = useremail => {
            emails = useremail;
        };
        const saveUserPassword = userpassword => {
            passwords = userpassword;
        };
        const saveUserType = usertype => {
            types = usertype;
            console.log(types);
        };


        var radio_props = [
            {label: 'Doctor', value: "doctor" },
            {label: 'Patient', value: "patient" }
          ];

        return(
            <ImageBackground source={img} style={styles.backgroundcontainer}>
               
                <View style={styles.logocontainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logotext}>Docs-App</Text>
                </View>

                <View  style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Name'}
                        placeholderTextColor={'black'}
                        underlineColorAndroid='transparent'
                        onChangeText={username => saveUserName(username)}
                    />
                </View>

                <View  style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'black'}
                        underlineColorAndroid='transparent'
                        onChangeText={useremail => saveUserEmail(useremail)}
                    />
                </View>
            
                <View  style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'black'}
                        underlineColorAndroid='transparent'
                        onChangeText={userpassword => saveUserPassword(userpassword)}
                    />
                </View>
                

                <View>
                    <RadioForm style={styles.inputcontainer}
                    radio_props={radio_props}
                    initial={0}
                    onPress={usertype => saveUserType(usertype)}
                    />
                </View>
               

            <TouchableOpacity style={styles.btnsignup}
                onPress={() => {

                    fetch('https://us-central1-docs-app-9e00a.cloudfunctions.net/user', {
                    method: 'POST',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    
                        name: names,
                        email: emails,
                        password: passwords,
                        type: types
                        
                    })
                    })
                    
                    .then(response =>{ 
                        let json=response.json();
                        if(json.error) {
                            console.log(json);
                            alert('Enter data again');
                            return;
                        }
                    
                    })
                    alert('Signed Up Login Now');
                    navigation.navigate('Login')

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
        marginBottom:30
    },
    logo:{
        width:100,
        height:100
    },
    logotext:{
        color:'black',
        fontSize:25,
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
    btnsignup:{
        width:WIDTH-55,
        height:45,
        borderRadius:25,
        backgroundColor:'red',
        justifyContent:'center',
        marginTop:20
    },
    btnlogin:{
        width:WIDTH-55,
        height:45,
        justifyContent:'center',
        marginTop:15
    },
    signuptext:{
        color:'white',
        fontSize:16,
        textAlign:'center'
    },
    logintext:{
        color:'black',
        fontWeight:'bold',
        fontSize:19,
        textAlign:'center'
    }
}
)

export default signup;