import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Example from './Example'

export default function PhotoTag() {

    
    return (
        <View style={{backgroundColor:"black",paddingTop:0}}>
            {/* <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:10}}>
                <View style={{borderBottomColor:"teal",borderBottomWidth:2,width:"50%",margin:0,alignItems:"center"}}><Ionicons name="md-grid" size={28} color="white" style={{marginBottom:5}}/></View>
                <View style={{width:"50%",margin:0,alignItems:"center"}}><MaterialIcons name="person-pin" size={28} color="white" /></View>
            </View> */}
        <Example/>
        </View>
    )
}
