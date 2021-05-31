import React, {useEffect,useState} from 'react';
import {View, Image, Text, Button, StyleSheet, FlatList} from 'react-native';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
    HeadingText,
} from '../styles/MessageStyles';
import axios from 'axios';

  
const MessageScreen = ({route,navigation}) => {
    const data=route.params;
    const [messages, setmessages] = useState([]);  
    // const [chatid, setchatid] = useState([]);  

    const options = async() => { 

        var option = {
                method: 'POST',
                url: 'https://us-central1-docs-app-9e00a.cloudfunctions.net/getpatientschats',
                headers: {
                    'content-type': 'application/json'
                },
                data: {uid:`${data.uid}`}
            }
            
            const response = await axios.request(option)
    
            // const chatid=response.data.chatId;
            // console.log(chatid);
            console.log(response);
            // navigation.navigate('ChatScreen',)
            // const temp=[];
            // for(let i=0;i<response.data.length;i++){
            //     temp.push(response.data[i].chatId);
            // }
            // setchatid(temp)
            setmessages(response.data);
            // console.log(response.data);
        }
        useEffect(() => {
            const subs = navigation.addListener('focus', options)
          }, [])

    return(
        
        <Container>
            <FlatList
                data  = { messages }
                keyExtractor = { item=>item.chatId }
                renderItem = { ({item}) => (
                    <Card onPress = {()=>{navigation.navigate('ChatScreen',{chatId:item.chatId , userid:data.uid, name:data.name})}}
                    >
                        <UserInfo>
                        <TextSection>
                            <UserInfoText>
                                <UserName>{item.senderName}</UserName> 
                                <PostTime>{item.timestamp.split(" ")[4]}</PostTime>
                            </UserInfoText>
                            <MessageText>{item.content}</MessageText>
                        </TextSection>

                        </UserInfo>
                    </Card>
                )

                }
            />
        </Container>
    )
}
export default MessageScreen;
