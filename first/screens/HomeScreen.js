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

const {width:WIDTH}=Dimensions.get('window')

const Messages = [
  {
    id: '1',
    userName: 'Sarthak Pruthi',
    userImage: require('../assets/user-1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, completed message and chat screen',
  }
];

const HomeScreen = ({route, navigation}) => {
  
  const data=route.params;

  return (
      <View style={  {flex:1, justifyContent:'center', alignItems:'center' } }>

        <SafeAreaView style={styles.btnmatch}>
          <FlatList
                data  = { Messages }
                keyExtractor = { item=>item.id }
                renderItem = { ({item}) => (
                    <TouchableOpacity 
                      
                      onPress = {() => navigation.navigate('Chat', {...item})}>

                        <Text style={styles.matchtext}> Chat with doctor </Text>

                    </TouchableOpacity>
                )}
            />
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