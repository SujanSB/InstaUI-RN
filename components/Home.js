import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import Header from './homeComp/Header'
import MainContent  from './homeComp/MainContent'
import StoryContent  from './homeComp/StoryContent'

export default function Home() {
    return (
        <View style={{flex:1, marginTop:30,backgroundColor:"#1a1a1a", }}>
                <Header/>
                <ScrollView>
                    <StoryContent/>
                    <MainContent/>
                </ScrollView>
        </View>
    )
}
