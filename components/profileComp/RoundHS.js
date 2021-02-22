import React from 'react'
import { View,Image, Text } from 'react-native'

export default function RoundHS(props) {
    const {item}=props
    return (
        <View  >
                <Image source={{uri:  props.item.img}} style={{height:70,width:70,marginRight:10,marginBottom:5,borderWidth:2,borderColor:"gray",borderRadius:35}}/> 

                <Text style={{textAlign:"center",color:"white",width:80,fontSize:12}} numberOfLines={1}>{item.title}</Text>
        </View>
    )
}
