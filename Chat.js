import React from 'react'
import { View, Text } from 'react-native'
import ChatHeader from './components/chatComp/ChatHeader'
import ChatBody from './components/chatComp/ChatBody'
import TypeChat from './components/chatComp/TypeChat'
import { ScrollView } from 'react-native-gesture-handler'

export default function Chat() {
    return (
        <View style={{ flex: 1, marginTop: 30,backgroundColor:"black"}}>
        <ChatHeader/>
            <ScrollView>
            <ChatBody/>
            <TypeChat/>
            </ScrollView>
        </View>
    )
}
