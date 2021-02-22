import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './profileComp/Header'
import Profilepic from './profileComp/Profilepic'
import NPBC from './profileComp/NPBC'
import Photoshere from './profileComp/Photoshere'

export default function ProfileScreen() {
    return (
        <View style={{flex:1, marginTop:30,backgroundColor:"#1a1a1a", }}>
            <Header/>
            <ScrollView>
                <Profilepic/>
                <NPBC/>
                <Photoshere/>
            </ScrollView>
        </View>
    )
}
