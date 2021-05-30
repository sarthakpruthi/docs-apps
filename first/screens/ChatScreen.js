import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat } from 'react-native-gifted-chat'


const ChatScreen = ( {route , navigation} ) => {

        const [messages, setMessages] = useState([]);  
        
        const data = route.params;

        useEffect(() => {
          setMessages([
            {
              _id: 1,
              text: "Hello " + data.userName,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: data.userImage,
              },
            },
          ])
        }, [])

        const onSend = useCallback((messages = []) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
          }, [])

    return(
         <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            scrollToBottom
        />
    )
}
export default ChatScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
})