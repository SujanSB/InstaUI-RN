import React from 'react'
import { View,Text, TextInput,StyleSheet,Icon } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ChatBody() {
    return (
        <View>
        <View style={{padding:15,paddingBottom:5,backgroundColor:"black"}}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius:8,
            backgroundColor: '#4d4d4d',}}>
                <Text style={{padding:6,}}>
                    <Ionicons  name="ios-search" size={22} color="#b3b3b3" />
                    </Text>
                <TextInput
                    style={{ flex: 1,
                        paddingTop: 1,
                        paddingRight: 5,
                        paddingBottom: 1,
                        paddingLeft: 0,
                        fontSize:15,
                        backgroundColor: '#4d4d4d',
                        color: '#b3b3b3',}}
                    placeholder="Search..."
                    placeholderTextColor = "#b3b3b3"
                    underlineColorAndroid="transparent"
                />
        </View>
        </View>
                





        </View>
    )
}

