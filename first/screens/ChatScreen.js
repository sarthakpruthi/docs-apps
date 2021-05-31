import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat } from 'react-native-gifted-chat'
import axios from 'axios';


const ChatScreen = ( {route , navigation} ) => {

  const [messages, setmessages] = useState([]);  
        // console.log(route);
        const data = route.params;
        console.log(data.chatId);

        const options = async() => { 

          var option = {
                  method: 'POST',
                  url: 'https://us-central1-docs-app-9e00a.cloudfunctions.net/getmessages',
                  headers: {
                      'content-type': 'application/json'
                  },
                  data: {chatId:`${data.chatId}`, userId:`${data.userid}`}
              }
              const response = await axios.request(option);
              
              const msgs=response.data;
              
               setmessages(msgs);
          }

          const sendingmessages = async(currentmessage) => { 

            var option = {
                    method: 'POST',
                    url: 'https://us-central1-docs-app-9e00a.cloudfunctions.net/sendmessage',
                    headers: {
                        'content-type': 'application/json'
                    },
                    data: {chatId:`${data.chatId}`, uid:`${data.userid}`, userName:`${data.name}`, timestamp:`${new Date()}`, text:`${currentmessage}`, type:`${"text"}`}
                }
                const response = await axios.request(option);
               
                options()
            }

        useEffect(() => {
          const subs = navigation.addListener('focus', options)
        }, [])

        const onsend = useCallback((messages = []) => {

              setmessages(previousMessages => {GiftedChat.append(previousMessages, messages) 
                sendingmessages(messages[0].text)
            })
          }, [])

    return(
         <GiftedChat
            messages={messages}
            onSend={messages => onsend(messages)}
            user={{
                _id: data.userid,
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