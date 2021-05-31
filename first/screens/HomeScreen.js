import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Button } from 'react-native-paper';
import axios from 'axios';

const {width:WIDTH}=Dimensions.get('window')



const HomeScreen = ({route, navigation}) => {
  
  const data=route.params;
  // console.log(data);

  const options = async() => { 

    var option = {
            method: 'POST',
            url: 'https://us-central1-docs-app-9e00a.cloudfunctions.net/searchdoctor',
            headers: {
                'content-type': 'application/json'
            },
            data: {uid:`${data.uid}`}
        }
        
        const response = await axios.request(option)

        const chatid=response.data.chatId;
        // console.log(chatid);
        navigation.navigate('ChatScreen',{chatId:response.data.chatId , userid:data.uid, name:data.name })
    }



  return (
      <View style={  {flex:1, justifyContent:'center', alignItems:'center' } }>

        <SafeAreaView style={styles.btnmatch}>
          
                    <TouchableOpacity 
                      
                      onPress = {options}>

                        <Text style={styles.matchtext}> Chat with doctor </Text>

                    </TouchableOpacity>

          </SafeAreaView>

                <Button color='white' style={styles.logoutbtn}
                  onPress={() =>  navigation.navigate('Login') }>
                  Log Out
                </Button>
      </View>  
      )
}

const styles = StyleSheet.create({
    logoutbtn:{
      height:40,
      borderRadius:25,
      backgroundColor:'red',
      flexDirection:"row",
      position: 'absolute',
      bottom:0
    },
    btnmatch:{
      width:WIDTH-55,
      height:45,
      justifyContent:'center',
      alignItems: 'center',
      borderRadius:25,
      backgroundColor:'#FF8C00',
      marginTop:60,
      position: 'absolute',
      top:15
    },
    matchtext:{
        color:'white',
        fontWeight:'bold',
        fontSize:19,
        marginTop:8,
        textAlign:'center',
        alignItems:'center'
    }
})

export default HomeScreen;