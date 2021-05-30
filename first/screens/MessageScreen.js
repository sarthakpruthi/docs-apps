import React from 'react';
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


const Messages = [
    {
      id: '1',
      userName: 'Sarthak Pruthi',
      userImage: require('../assets/user-1.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, completed message and chat screen',
    },
    {
      id: '2',
      userName: 'Sarthak pal',
      userImage: require('../assets/user-2.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, completed message and chat screen.',
    },
    {
      id: '3',
      userName: 'Anubhav Mittal',
      userImage: require('../assets/user-3.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, completed message and chat screen.',
    },
    {
      id: '4',
      userName: 'Nikhil',
      userImage: require('../assets/user-4.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, completed message and chat screen.',
     messagetype
    },
  ];
  
const MessageScreen = ({navigation}) => {
    return(
        
        <Container>

            <FlatList
                data  = { Messages }
                keyExtractor = { item=>item.id }
                renderItem = { ({item}) => (
                    <Card onPress = {() => navigation.navigate('Chat', {...item})}>
                        <UserInfo>
                            <UserImgWrapper>
                                <UserImg source= { item.userImage } />
                            </UserImgWrapper>

                        <TextSection>
                            <UserInfoText>
                                <UserName>{item.userName}</UserName>
                                <PostTime>{item.messageTime}</PostTime>
                            </UserInfoText>
                            <MessageText>{item.messageText}</MessageText>
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
